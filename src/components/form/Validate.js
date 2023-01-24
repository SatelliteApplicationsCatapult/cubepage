import {
  convertDateToString,
  checkDataExists,
  checkKeysValues,
} from "../../utils/utils";

const Validate = async (values, settings, taskName) => {
  var errors = {};
  var parsedSettings = {};

  Object.keys(settings).forEach((setting) => {
    var checkId = setting;
    if (setting === "platform" && !Object.keys(values).includes(setting)) {
      checkId = "baseline_platform";
    }
    if (Object.keys(values).includes(checkId)) {
      const conditions = settings[setting];
      conditions.forEach((condition) => {
        if (
          (Array.isArray(values[checkId]) &&
            values[checkId].includes(condition.name)) ||
          values[checkId] === condition.name
        ) {
          condition.conditions.forEach((c) => {
            if (
              (c.processes && c.processes.includes(taskName)) ||
              !c.processes
            ) {
              let ids = c.id;
              let range = c.value;
              ids.forEach((id) => {
                if (Object.keys(values).includes(id)) {
                  if (!parsedSettings[id]) parsedSettings[id] = [];
                  if (parsedSettings[id]) {
                    parsedSettings[id].push(range);
                  }
                }
              });
            }
          });
        }
      });
    }
  });
  var validatedRanges = [];

  /**
   * checks if analysis_platform exists in the values array (is a field in the form)
   * checks if analysis_platform has a value (analysis sensor(s) chosen)
   * checks if the analysis_platform is an array [Water Change form only]
   * gets the sensor name inorder to find its start and end times from the conditions object
   * updates the analysis_time_end and analysis_time_start in parsedSettings
   * if no analysis sensor has been chosen yet, the revelant parsedSettings are set to an empty array
  */
  if(values.analysis_platform != undefined){
    if(values.analysis_platform.length != 0){
      let analysisSensorName;
      // checking if the sensors stored in the values array are themselves an array (only for Water Change task)
      if (Array.isArray(values.analysis_platform)){
        analysisSensorName = values.analysis_platform[0];
      } else {
        analysisSensorName = values.analysis_platform;
      };
      // getting the start/end data for this sensor
      for (let setting of settings.platform){
        if (setting.name === analysisSensorName){
          // updating the analysis start/end in parsedSettings
          parsedSettings.analysis_time_end = new Array(setting.conditions.at(-1).value);
          parsedSettings.analysis_time_start = new Array(setting.conditions.at(-1).value);
        };
      };
    } else {
      // setting empty arrays for the analysis start/end
      parsedSettings.analysis_time_end = [];
      parsedSettings.analysis_time_start = [];
    };
  };

  /**
   * checks if baseline_platform exists in the values array (is a field in the form)
   * checks if baseline_platform has a value (baseline sensor(s) chosen)
   * checks if the baseline_platform is an array [Water Change form only]
   * gets the sensor name in order to find its start and end times from the conditions object
   * updates the baseline_time_end and baseline_time_start in parsedSettings
   * if no baseline sensor has been chosen yet, the revelant parsedSettings are set to an empty array
  */
  if (values.baseline_platform != undefined){
    if(values.baseline_platform.length != 0){
      let baselineSensorName;
      // checking if the sensors stored in the values array are themselves an array (only for Water Change task)
      if (Array.isArray(values.baseline_platform)){
        baselineSensorName = values.baseline_platform[0];
      } else {
        baselineSensorName = values.baseline_platform;
      };
      // getting the start/end data for this sensor
      for (let setting of settings.platform){
        if (setting.name === baselineSensorName){ 
          // updating the baseline start/end in parsedSettings
          parsedSettings.baseline_time_end = new Array(setting.conditions.at(-1).value);
          parsedSettings.baseline_time_start = new Array(setting.conditions.at(-1).value);
        };
      };
    } else {
      // setting empty arrays for the baseline start/end
      parsedSettings.baseline_time_end = [];
      parsedSettings.baseline_time_start = [];
    };
  };

  Object.keys(parsedSettings).forEach((setting) => {
    var minValues = [];
    var maxValues = [];
    parsedSettings[setting].forEach((range) => {
      minValues.push(range[0]);
      if (range.length > 1) {
        maxValues.push(range[1]);
      }
    });
    var minBound, maxBound;
    if (typeof minValues[0] === "number") {
      minBound = Math.max.apply(null, minValues);
      maxBound = Math.min.apply(null, maxValues);
      if (minBound < maxBound)
        validatedRanges.push({
          id: setting,
          type: "number",
          minBound,
          maxBound,
        });
      else errors[setting] = "Sensor ranges are incompatible.";
    }
    // Must be Date
    if (typeof minValues[0] === "string") {
      minBound = new Date(minValues[0]);
      for (let i = 1; i < minValues.length; i++) {
        if (new Date(minValues[i]) > minBound) {
          minBound = new Date(minValues[i]);
        }
      }
      if (maxValues.length) {
        maxBound = new Date(maxValues[0]);
        for (let i = 1; i < maxValues.length; i++) {
          if (new Date(maxValues[i]) < maxBound) {
            maxBound = new Date(maxValues[i]);
          }
        }
        // If there is only one index in the array, then max date is todays date
      } else {
        maxBound = new Date();
      }
      if (minBound < maxBound)
        validatedRanges.push({ id: setting, type: "date", minBound, maxBound });
      else errors[setting] = "Sensor ranges are incompatible.";
    }
  });
  // Check if the values are within the bounds
  validatedRanges.forEach((range) => {
    if (
      values[range.id] < range.minBound ||
      values[range.id] > range.maxBound ||
      new Date(values[range.id]) < range.minBound ||
      new Date(values[range.id]) > range.maxBound
    ) {
      if (values[range.id]) {
        if (range.type === "date") {
          errors[range.id] =
            "Must be between " +
            convertDateToString(new Date(range.minBound)) +
            " and " +
            convertDateToString(new Date(range.maxBound));
        } else if (range.type === "number") {
          errors[range.id] =
            "Must be between " + range.minBound + " and " + range.maxBound;
        }
      }
    }
  });

  const checkData = async (values, keys, errors) => {
    if (checkKeysValues(values, keys)) {
      const aoi = values[keys[0]];
      const start = values[keys[1]];
      const end = values[keys[2]];
      const platform = values[keys[3]];

      // if platform is string
      if (typeof platform === "string") {
        let dataExists = await checkDataExists(aoi, platform, start, end);
        console.log(dataExists);
        if (dataExists.valid_datasets) {
        } else {
          // set an error
          if (!errors[keys[1]]) {
          errors[keys[1]] = "No data exists for this time and area range";
          }
          if (!errors[keys[2]]) {
            errors[keys[2]] = "No data exists for this time and area range";
          }
        }
      }

      // if platform is array
      if (Array.isArray(platform)) {
        // Loop through each platform and check if data exists
        for (let i = 0; i < platform.length; i++) {
          let dataExists = await checkDataExists(aoi, platform[i], start, end);
          if (dataExists.valid_datasets) {
          } else {
            // set an error
            errors[keys[1]] = "No data exists for this time and area range";
            errors[keys[2]] = "No data exists for this time and area range";
          }
        }
      }
    }
  };

  await checkData(
    values,
    ["aoi_wkt", "time_start", "time_end", "platform"],
    errors
  );
  await checkData(
    values,
    [
      "aoi_wkt",
      "baseline_time_start",
      "baseline_time_end",
      "baseline_platform",
    ],
    errors
  );
  await checkData(
    values,
    [
      "aoi_wkt",
      "analysis_time_start",
      "analysis_time_end",
      "analysis_platform",
    ],
    errors
  );
  await checkData(
    values,
    ["aoi_wkt", "baseline_time_start", "baseline_time_end", "platform"],

    errors
  );

  await checkData(
    values,
    ["aoi_wkt", "baseline_start_date", "baseline_end_date", "platform"],

    errors
  );

  return errors;
};
export default Validate;
