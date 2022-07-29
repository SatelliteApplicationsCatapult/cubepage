import NDVIAnomaly from "../assets/images/tasks/NDVIAnomaly.png";
import Geomedian from "../assets/images/tasks/Geomedian.png";
import LandDegradation from "../assets/images/tasks/LandDegradation.png";
import Indices from "../assets/images/tasks/Indices.png";
import S1Image from "../assets/images/tasks/S1image.png";
import ShorelineChange from "../assets/images/tasks/ShorelineChange.png";
import VegetationChange from "../assets/images/tasks/Vegetationchange.png";
import FractionalCover from "../assets/images/tasks/vF_Fractionalcover.png";
import WaterChange from "../assets/images/tasks/vF_WaterChange.png";
import WaterPermanency from "../assets/images/tasks/WaterPermanency.png";
import WaterQuality from "../assets/images/tasks/Waterquality.png";

export const localImages = {
  "NDVI Anomaly": { NDVIAnomaly },
  "Sentinel-1 Median Composite": { S1Image },
  "Shoreline Extraction": { ShorelineChange },
  "Water Change": { WaterChange },
  "Fractional Cover": { FractionalCover },
  "Land Change": { LandDegradation },
  "Water Quality": { WaterQuality },
  "Water Permanency": { WaterPermanency },
  "Vegetation Change": { VegetationChange },
  "Mosaic Indices": { Indices },
  Geomedian: { Geomedian },
};

export const docs = {
  "WaterPermanency.WaterPermanency_Task": [
    {
      type: "header",
      text: "Water Permanency",
    },
    {
      type: "paragraph-with-image",
      subheading: "Description",
      image: "water-perm.png",
      text: `For every image, from the satellites Sentinel-1, Sentinel-2 and the Landsat series, a water mask has been generated. This product takes these water masks to generate 
      This product takes advantage of the per scene pre-generated water masks, to provide information on the permanency of a water surface. The permanency is reprinted as a percentage of the total number of observations in which water is detected in each pixel. `,
      direction: "ltr",
    },
    {
      type: "paragraph-with-image",
      subheading: "Parameters",
      imagefit: "contain",
      image: "cube-process.png",
      text: `Satellite: As watermarks have been generated for Sentinel-2, Sentinel-1, and the Landsat Series, all these sensors can be used for this analysis. Which of these sensors you choose depends on the time period for which you are interested in.

      Time Range: The time period in which you would like the images for the analysis. If the result has ‘holes’ in it (areas of no data), try increasing the time period, this is a result of cloud cover.
    
      Coordinate Reference System: The Coordinate Reference System (CRS) desired for the Product. This is EPSG:3460 for Fiji, ‘Fiji 1986 / Fiji Map Grid’.
      
      Area of Interest: The area that you, as the user, are interested in producing the product for. The larger this is, the longer the Data Cube will take to complete it. The Data Cube products were designed to be done on a regional basis rather than a national basis so, if your Area of Interest is too large, you may even get an error saying so. In this case, you will need to divide your Area of Interest into ‘chunks’ and then run each chunk separately.
      
      Resolution: The spatial resolution of the product, in meters. As a minimum, this should be is the native spatial resolution of a sensor (10m for Sentinel-2, 30m for the Landsat series). Doing larger spatial resolutions (e.g. 100m) will mean your product will run quicker, and you can potentially look at larger areas but you may lose some of the spatial detail`,
      direction: "rtl",
    },
    {
      type: "paragraph-with-image",
      subheading: "Outputs",
      image: "output-scale.png",
      caption:
        "Water Permanency example output over a lake, showing variable water permamency at the top of the North of the Lake.",
      text: "The output of this product is a single raster, with values ranging from 0 to 100, representing a percentage of in how many observations each pixel was recorded as having water on the surface by the selected sensor. ",
      direction: "rtl",
    },
    {
      type: "paragraph",
      text: `Use Cases
      This product could be used to inform on the fluctuation of water bodies over a time period. This could be used to identify water resources vulnerable to drying out or areas of regular flooding.
      Example Use Case
      This use case looks at an inland water body in Fiji, Vaturu Dam, this is a human-built dam, which provides water to the dry western division of Viti Levu. In December 2019 water levels were reported to be low in this dam. This product can be used to see the water permamency within the dam. `,
    },
  ],
  "WaterChange.WaterChange_Task": [
    {
      type: "header",
      text: "Water Change",
    },
    {
      type: "paragraph-with-image",
      subheading: "Description",
      image: "water-change.png",
      text: "This product takes advantage of the pre-generated water masks, in the same way as the water permanency product, but provides a change product, in which the recorded surface water between two separate time periods can be directly compared. ",
      direction: "ltr",
    },
    {
      type: "paragraph-with-image",
      subheading: "Parameters",
      imagefit: "contain",
      image: "cube-process.png",
      text: `Baseline Sensor + Analysis Sensor: All the available sensors are applicable to water change, as it relies on pre-generated water masks, so Landsat, Sentinel-2, and Sentinel-1. For the best comparison, it is recommended not to mix these sensors though the bands are comparable but not identical. The baseline sensor is that of the reference year, and the analysis sensor the one we are interested in seeing the change of. Which sensors you choose may depend on the time period you are interested in.

      Baseline and Analysis Time Range: The two time periods with which we want to water. The baseline is the reference time period, whilst the analysis is the year we want to observe the changes in relation to the baseline. If the result has ‘holes’ in it (areas of no data), try increasing the time period, this is a result of cloud cover.
      
      Resolution: The spatial resolution of the product, in meters. As a minimum, this should be is the native spatial resolution of a sensor (10m for Sentinel-2, 30m for the Landsat series, 20m for Sentinel-1). Doing larger spatial resolutions (e.g. 100m) will mean your product will run quicker, and you can potentially look at larger areas but you may lose some of the spatial detail.
      
      Water Presence Threshold: For the threshold output, the user the value would like to set the threshold for, this should range between 0 and 1, where 0 would be no threshold set and 1 would eliminate all data. 
      
      Areas of Interest: The area that you, as the user, are interested in producing the Water Change product for. The larger this is, the longer the Data Cube will take to complete it. The Data Cube products were designed to be done on a regional basis rather than a national basis so, if your Area of Interest is too large, you may even get an error saying so. In this case, you will need to divide your Area of Interest into ‘chunks’ and then run each chunk separately.
      
      Coordinate Reference System: The Coordinate Reference System (CRS) desired for the Product. This is EPSG:3460 for Fiji, ‘Fiji 1986 / Fiji Map Grid’.
      
      Mosaic Type: This determines how all the data recorded in your time range, for each pixel, is combined. Current options include ‘median’ and ‘maximum’. `,
      direction: "rtl",
    },
    {
      type: "paragraph-with-image",
      subheading: "Outputs",
      image: "output-1.png",
      caption: `In the water change threshold product, only values of 0 and 1 exist, this product shows how the meander of a river has moved over several decades`,
      text: `Two final products are produced

      1. Gradient change, this product gives more information than the threshold, as it shows you the range of values, however, this may be more information than what is required by the user. 
      
      2. Threshold change based on a user-defined threshold, this offers binary values of 0 or 1 decided by whether they are above or below the threshold value. 
      
      These offer a picture of where the surface water has changed between two time periods.`,
    },
  ],
  "WaterQuality.WaterQuality_Task": [
    {
      type: "header",
      text: "Water Quality",
    },
    {
      type: "paragraph-with-image",
      subheading: "Description",
      image: "water-quality.png",
      text: `There are several methods in which water quality can be interpreted through satellite imagery, this product provides a measure of the relative turbidity of a water body. The Normalised Difference Turbidity Index (NDTI) is used, shown by the below equation:

      NDTI = (RED – GREEN) / (RED + GREEN)

      This equation is an indicator of the relative turbidity of a water body, as pure water usually has greater reflectance in the green rather than the red wavelengths. However, in more turbid waters, it is reported that the reflectance in the red wavelength increases.  The output of this product is an index that improves our view of turbidity. Higher values of NDTI indicate higher turbidity and vice versa, values range from -1 to 1. 
    `,
      direction: "ltr",
    },
    {
      type: "paragraph-with-image",
      subheading: "Parameters",
      imagefit: "contain",
      image: "cube-process.png",
      text: `Satellite: Two of the available sensors are applicable to NDTI, as multi-spectral sensors are needed, Sentinel-2 and the Landsat series. Which of these sensors you choose depends on the time period for which you are interested.

      Time Range: The time period in which you would like the images for the analysis. If the result has ‘holes’ in it (areas of no data), try increasing the time period, this is a result of cloud cover.
      
      Coordinate Reference System: The Coordinate Reference System (CRS) desired for the Product. This is EPSG:3460 for Fiji, ‘Fiji 1986 / Fiji Map Grid’.
      
      Area of Interest: The area that you, as the user, are interested in producing the product for. The larger this is, the longer the Data Cube will take to complete it. The Data Cube products were designed to be done on a regional basis rather than a national basis so, if your Area of Interest is too large, you may even get an error saying so. In this case, you will need to divide your Area of Interest into ‘chunks’ and then run each chunk separately.
      
      Resolution: The spatial resolution of the product, in meters. As a minimum, this should be is the native spatial resolution of a sensor (10m for Sentinel-2, 30m for the Landsat series). Doing larger spatial resolutions (e.g. 100m) will mean your product will run quicker, and you can potentially look at larger areas but you may lose some of the spatial detail
      
      `,
      direction: "rtl",
    },
    {
      type: "paragraph-with-image",
      subheading: "Outputs",
      image: "output.png",
      text: `This product comes as a single band raster in '.tiff' format.

      Values range between -1 and 1, where values closer to 1 relate to more turbid waters. `,
      caption: `Example water quality output, for the coastal region surrounding Sigatoka. White represents land - which is masked from the analysis. Lighter colours represent more turbid waters.`,
    },
  ],
  "ShorelineExtraction.ShorelineExtraction_Task": [
    {
      type: "header",
      text: "Shoreline Extraction",
    },
    {
      type: "coming-soon",
    },
  ],
  "FractionalCover.FractionalCover_Task": [
    {
      type: "header",
      text: "Fractional Cover",
    },
    {
      type: "paragraph-with-image",
      subheading: "Description",
      image: "FractionalCover.jpg",
      text: `Fractional Cover is a land cover product, containing three bands, for the area selected, each pixel is given a fraction in each band, representing the land cover at the surface. The three fractions are:

      Bare Soil (BS)- areas where no vegetation cover exists. 
      Photosynthetic vegetation (PV) - where the vegetation is still active and 'green'.
      Non-photosynthetic Vegetation (NPV) -vegetation which is 'dead' such as branches and fallen leaves or dry vegetation.
      The total value of each pixel equals 100, this is split between the three fractions. E.g. A pixel which contains mostly fresh vegetation, but with small areas of bare soil, may be represented as BS 10, PV: 90, NPV: 0. 
      
      The fractions are represented as an RGB image, where the color represents the dominance of each fraction within a pixel.
      
      BS - Red
      PV - Green
      NPV - Blue
      The equation used to calculate this is is not specifically calibrated to Fiji, but uses the algorithm developed by Digital Earth Australia. (Digital Earth Australia, Fractional Cover)`,
      direction: "ltr",
    },
    {
      type: "paragraph-with-image",
      subheading: "Parameters",
      imagefit: "contain",
      image: "cube-process.png",
      text: `Satellite: Two of the available sensors are applicable to Fractional Cover, as multi-spectral sensors are needed, Sentinel-2 and the Landsat series. Which of these sensors you choose depends on the time period for which you are interested in. 
      Time Range: The time period in which you would like the images for the analysis. If the result has ‘holes’ in it (areas of no data), try increasing the time period, this is a result of cloud cover.
      
      Coordinate Reference System: The Coordinate Reference System (CRS) desired for the Product. This is EPSG:3460 for Fiji, ‘Fiji 1986 / Fiji Map Grid’.
      Area of Interest: The area that you, as the user, are interested in producing the product for. The larger this is, the longer the Data Cube will take to complete it. The Data Cube products were designed to be done on a regional basis rather than a national basis so, if your Area of Interest is too large, you may even get an error saying so. In this case, you will need to divide your Area of Interest into ‘chunks’ and then run each chunk separately.
      Resolution: The spatial resolution of the product, in meters. As a minimum, this should be is the native spatial resolution of a sensor (10m for Sentinel-2, 30m for the Landsat series). Doing larger spatial resolutions (e.g. 100m) will mean your product will run quicker, and you can potentially look at larger areas but you may lose some of the spatial detail.
      `,
      direction: "rtl",
    },
    {
      type: "paragraph-with-image",
      subheading: "Outputs",
      image: "legend.png",
      text: `Satellite: Two of the available sensors are applicable to Fractional Cover, as multi-spectral sensors are needed, Sentinel-2 and the Landsat series. Which of these sensors you choose depends on the time period for which you are interested in. 
      Time Range: The time period in which you would like the images for the analysis. If the result has ‘holes’ in it (areas of no data), try increasing the time period, this is a result of cloud cover.
      
      Coordinate Reference System: The Coordinate Reference System (CRS) desired for the Product. This is EPSG:3460 for Fiji, ‘Fiji 1986 / Fiji Map Grid’.
      Area of Interest: The area that you, as the user, are interested in producing the product for. The larger this is, the longer the Data Cube will take to complete it. The Data Cube products were designed to be done on a regional basis rather than a national basis so, if your Area of Interest is too large, you may even get an error saying so. In this case, you will need to divide your Area of Interest into ‘chunks’ and then run each chunk separately.
      Resolution: The spatial resolution of the product, in meters. As a minimum, this should be is the native spatial resolution of a sensor (10m for Sentinel-2, 30m for the Landsat series). Doing larger spatial resolutions (e.g. 100m) will mean your product will run quicker, and you can potentially look at larger areas but you may lose some of the spatial detail.
      `,
    },
  ],
  "NDVIAnomaly.NDVIAnomaly_Task": [
    {
      type: "header",
      text: "NDVI Anomaly",
    },
    {
      type: "paragraph-with-image",
      subheading: "Description",
      image: "NDVI-anomaly.png",
      text: `The Normalised Difference Vegetation Index (NDVI) represents the ‘greenness’ of a vegetated surface, which relates to the chlorophyll content of the vegetation.  It is calculated using the Red and Near-Infrared (NIR) Bands of an optical sensor, based upon this equation: 
      NDVI = (NIR – RED)/(NIR + Red) 

The resulting NDVI value tells us how vegetated a surface is, for each pixel the value ranges from minus one (-1) to plus one (+1); a surface with non-green vegetation would give you a value close to zero, whilst values closer to +1 indicate the highest density of green vegetation. More Information at this link.

This Data Cube Product examines the changes in the NDVI between two time periods. It is recommended that these two time periods are seasonally comparable to prevent ‘changes’ seen being a result of seasonal variation (e.g. both time periods selected are either for the dry or wet season respectively). Areas of positive change represent an increase in the vegetation density on the surface, whilst negative values represent a decrease in the vegetation density. Values range from -1 to 1.  

The NDVI Anomaly essentially provides a qualitative indication of how ‘good’ or ‘bad’ the current vegetation situation is when compared to a reference season. 

The workflow which is carried out through the data cube is provided in the diagram below.`,
      direction: "ltr",
    },
    {
      type: "paragraph-with-image",
      subheading: "Parameters",
      imagefit: "contain",
      image: "cube-process.png",
      text: `
      Baseline Sensor + Analysis Sensor: Two of the available sensors are applicable to NDVI anomaly, as information on the Near Infrared and Red bands are required, we need multi-spectral sensors, Sentinel-2 and the Landsat series. For the best comparison, it is recommended not to mix these sensors though the bands are comparable but not identical. The baseline sensor is that of the reference year, and the analysis sensor the one we are interested in seeing the change of. Which sensors you choose may depend on the time period you are interested in.


Baseline and Analysis Time Range: The two time periods with which we want to compare the NDVI, these should be comparable seasonally. The baseline is the reference time period, whilst the analysis is the year we want to observe the changes in relation to the baseline. If the result has ‘holes’ in it (areas of no data), try increasing the time period, this is a result of cloud cover.

Resolution: The spatial resolution of the product, in meters. As a minimum, this should be is the native spatial resolution of a sensor (10m for Sentinel-2, 30m for the Landsat series). Doing larger spatial resolutions (e.g. 100m) will mean your product will run quicker, and you can potentially look at larger areas but you may lose some of the spatial detail.


Areas of Interest: The area that you, as the user, are interested in producing the NDVI Anomaly Product for. The larger this is, the longer the Data Cube will take to complete it. The Data Cube products were designed to be done on a regional basis rather than a national basis so, if your Area of Interest is too large, you may even get an error saying so. In this case, you will need to divide your Area of Interest into ‘chunks’ and then run each chunk separately.

Coordinate Reference System: The Coordinate Reference System (CRS) desired for the Product. This is EPSG:3460 for Fiji, ‘Fiji 1986 / Fiji Map Grid’.

Mosaic Type: This determines how all the data recorded in your time range, for each pixel, is combined. Current options include ‘median’ and ‘maximum’. `,
      direction: "rtl",
    },
    {
      type: "paragraph-with-multiple-images",
      subheading: "Outputs",
      images: [
        {
          image: "output-1.png",
          caption:
            "The black areas in this image are where water has been masked.",
        },
        {
          image: "output-2.png",
          caption:
            "The black areas in this image are areas of no-data where clouds have been masked.",
        },
      ],
      direction: "ttb",
      text: `The output Product is a single GeoTIFF file, with values ranging from -1 to 1 where negative values indicate a reduction in surface vegetation relative to the baseline time period, and positive values indicate an increase in surface vegetation.

      If ‘holes’ occur in your output, this could be due to two things:
      Water is present in your AOI – areas of water are masked out during processing.
      Cloud is present in your AOI – cloud is masked out during processing. `,
    },
  ],
  "MosaicIndices.MosaicIndices_Task": [
    {
      type: "header",
      text: "Mosaic Indices",
    },
    {
      type: "paragraph-with-image",
      subheading: "Description",
      image: "mosaicindices.png",
      text: `Many indices can be created from satellite imagery, they are usually a ratio of different bands, to enable information about the Earth's surface to be derived. These can be specific to certain locations requiring local parameter adjustments or generic relationships between bands.

      The Indices in this product include options of:​ 
      
      NDVI (Normalised Difference Vegetation Index)​
                      NDVI = (NIR - red) / (NIR + red) 
      
                      NDVI value tells us how vegetated a surface is, for each pixel the value ranges from                     minus one (-1) to plus one (+1); a surface with non-green vegetation would give you a                 value close to zero, whilst values closer to +1 indicate the highest density of green                 egetation. More Information at this link.
      
      NDWI (Normalised Difference Water Index)
                      NDWI = (green - NIR) / (green + NIR)
      
                      The NDWI takes advantage of green and near infrared bands to highlight water bodies.                 This index responds in a similar way to built-up land as to water, so can over-estimate                 water-bodies in these areas. More information at this link.
      
                      Values range from -1 to 1, values greater than 0.5 usually correspond to water bodies,                 with build-up areas between 0 and 0.2, and vegetation much smaller values.
      
      EVI (Enhanced Vegetation Index)
                      EVI = Green ((NIR - Red) / (NIR + C1 Red – C2 * Blue + L)) 
      
                      L is a correction for canopy background. C1 and C2 are values to adjust for                 atmospheric resistance. Although ideally these should be set on a per scene basis,                 these are set at 1 and 6 and 7.5 relatively for this product.  
      
                      EVI is similar to the NDVI and can also be used to quantify vegetation greenness.                 However, EVI corrects for some atmospheric conditions and canopy background noise                 and is more sensitive in areas with dense vegetation.
      
                      The range of  EVI values do go below -1 and 1, though most values are between these                    numbers, with healthy vegetation generally around 0.20 to 0.80. Higher values indicate                 denser vegetation.
      
      NDDI (Normalised Difference Drought Index)
                      This index takes advantage of two of the other indices in this product NDWI and NDVI.                 via the following equation.
      
                      NDDI = (NDVI - NDWI) / (NDVI+NDWI)
      
                      This index was developed by Gu et al (20017) to address drought, as the index takes                 advantage of NDVI's ability to detect planet matter and NDWI sensing plant moisture.                 Paper at this link, further information on this webpage.
      
                      NDDI values range between -1 and 1 with higher values representing drier conditions,                 and so more likely drought. 
      
      Many more indices exist for satellite imagery, as long as they are applicable to the bands of Landsat and Sentinel-2, then more indices could be added to this list. `,
      direction: "ltr",
    },
    {
      type: "paragraph-with-image",
      subheading: "Parameters",
      imagefit: "contain",
      image: "cubeprocess.png",
      text: `Satellite: Two of the available sensors are applicable to Aggregate Indices, as multi-spectral sensors are required for the chosen indices, Sentinel-2 and the Landsat series. Which of these sensors you choose depends on the time period for which you are interested in.

      Start Date: The start of the time period in which you would like the images for the analysis. If the result has ‘holes’ in it (areas of no data), try increasing the time period, this is a result of cloud cover.
      
      End Date: The end of the time period in which you would like the images for the analysis. If the result has ‘holes’ in it (areas of no data), try increasing the time period, this is a result of cloud cover.
      
      Indices: A choice of indices exist (see description) this can be selected here. 
      
      Mosaic Type: A choice of aggregation types exist, minimum, maximum, median, or mean. This aggregation determines how the data within the time range is aggregated together. 
      
      Coordinate Reference System: The Coordinate Reference System (CRS) desired for the Product. This is EPSG:3460 for Fiji, ‘Fiji 1986 / Fiji Map Grid’.
      
      Area of Interest: The area that you, as the user, are interested in producing the product for. The larger this is, the longer the Data Cube will take to complete it. The Data Cube products were designed to be done on a regional basis rather than a national basis so, if your Area of Interest is too large, you may even get an error saying so. In this case, you will need to divide your Area of Interest into ‘chunks’ and then run each chunk separately.
      
      Resolution: The spatial resolution of the product, in meters. As a minimum, this should be is the native spatial resolution of a sensor (10m for Sentinel-2, 30m for the Landsat series). Doing larger spatial resolutions (e.g. 100m) will mean your product will run quicker, and you can potentially look at larger areas but you may lose some of the spatial detail.`,
      direction: "rtl",
    },
    {
      type: "paragraph-with-multiple-images",
      subheading: "Outputs",
      images: [
        {
          image: "output-1.svg",
          caption: "NDVI",
        },
        {
          image: "output-1.svg",
          caption: "NDWI",
        },
        {
          image: "output-1.svg",
          caption: "EVI",
        },
        {
          image: "output-1.svg",
          caption: "NDDI",
        },
      ],
      direction: "ttb",
    },
  ],
  "VegetationChange.VegetationChange_Task": [
    {
      type: "header",
      text: "Vegetation Change",
    },
    {
      type: "paragraph-with-image",
      subheading: "Description",
      image: "vegetationchange.png",
      caption: "Vegetation change threshold product",
      text: `
      This product uses vegetation indices to identify changes in vegetation cover, with a choice of indices to use. 

      An option to place a threshold to filter the type of vegetation change identified is offered. 
      
      Indices types are NDVI or EVI both provide information on vegetation cover. 
      
      NDVI is the Normalised Difference Vegetation Index
      
       NDVI = (NIR – RED)/(NIR + Red) 
      NDVI value tells us how vegetated a surface is, for each pixel the value ranges from minus one (-1) to plus one (+1); a surface with non-green vegetation would give you a value close to zero, whilst values closer to +1 indicate the highest density of green vegetation.
      More Information at this link.
      EVI is the 'Enhanced Vegetation Index'
      
      EVI = Green ((NIR - Red) / (NIR + C1 Red – C2 * Blue + L))   
                      L is a correction for canopy background. C1 and C2 are values to adjust                 for atmospheric resistance. Although ideally these should be set on a per                 scene basis, these are set at ...... and ...... and .... for this product. 
      
      EVI is similar to the NDVI and can also be used to quantify vegetation greenness. However, EVI corrects for some atmospheric conditions and canopy background noise and is more sensitive in areas with dense vegetation.
      More information at this link.
      Both of these indices are slightly different but work in the same way, to determine the vegetation state. Users should test both to determine which is more appropriate for their area of interest. 
      `,
      direction: "ltf",
    },
    {
      type: "paragraph-with-image",
      subheading: "Parameters",
      imagefit: "contain",
      image: "cube-process.png",
      text: `Baseline Sensor + Analysis Sensor: Two of the available sensors are applicable to Vegetation Change, as multi-spectral sensors are required Sentinel-2 and the Landsat series. For the best comparison, it is recommended not to mix these sensors though the bands are comparable but not identical. The baseline sensor is that of the reference year, and the analysis sensor the one we are interested in seeing the change of. Which sensors you choose may depend on the time period you are interested in.

      Baseline and Analysis Time Range: The two time periods with which we want to compare the NDVI, these should be comparable seasonally. The baseline is the reference time period, whilst the analysis is the year we want to observe the changes in relation to the baseline. If the result has ‘holes’ in it (areas of no data), try increasing the time period, this is a result of cloud cover.
      
      Threshold Levels: ADD INFO IN HERE. 
      
      Resolution: The spatial resolution of the product, in meters. As a minimum, this should be is the native spatial resolution of a sensor (10m for Sentinel-2, 30m for the Landsat series). Doing larger spatial resolutions (e.g. 100m) will mean your product will run quicker, and you can potentially look at larger areas but you may lose some of the spatial detail.
      
      Areas of Interest: The area that you, as the user, are interested in producing the NDVI Anomaly Product for. The larger this is, the longer the Data Cube will take to complete it. The Data Cube products were designed to be done on a regional basis rather than a national basis so, if your Area of Interest is too large, you may even get an error saying so. In this case, you will need to divide your Area of Interest into ‘chunks’ and then run each chunk separately.
      
      Coordinate Reference System: The Coordinate Reference System (CRS) desired for the Product. This is EPSG:3460 for Fiji, ‘Fiji 1986 / Fiji Map Grid’.
      
      Mosaic Type: This determines how all the data recorded in your time range, for each pixel, is combined. `,
      direction: "rtl",
    },
    {
      type: "paragraph-with-multiple-images",
      subheading: "Outputs",
      images: [
        {
          image: "output-1.jpg",
          caption: "Gradient change product",
        },
        {
          image: "output-2.jpg",
          caption: "Threshold vegetation change product",
        },
      ],
    },
  ],
  "LandChange.LandChange_Task": [
    {
      type: "header",
      text: "Land Change",
    },
    {
      type: "paragraph-with-multiple-images",
      subheading: "Description",
      images: [
        {
          image: "PV.jpg",
          caption: "PV",
        },
        {
          image: "BS.jpg",
          caption: "BS",
        },
        {
          image: "NPV.jpg",
          caption: "NPV",
        },
      ],
      caption: "Land change product",
      text: `The land change product uses the same algorithm as Fractional Cover Product but considers the change in each of the three fractions (see Fractional Cover product for details).

      The three fractions are Bare Soil (BS), Photosynthetic Vegetation (PV), and Non-photosynthetic Vegetation (NPV).
      
      Each of the fractions in the Fractional Cover product is represented as values between 0 and 100.
      
      This land change product examines the difference in each of the three fractions between two time periods. Positive change in a band shows an increase of this land cover type, whilst negative shows a decrease.
      
      The three fractions can be used together to help determine not only where changes in landcover have taken place, but an indication of what the land is changing from and to with respect to BS, PV and NPV. 
      
    `,
      direction: "ttb",
    },
    {
      type: "paragraph-with-image",
      subheading: "Parameters",
      imagefit: "contain",
      image: "cube-process.png",
      text: `Baseline Sensor + Analysis Sensor: Two of the available sensors are applicable to Land Change, as multi-spectral sensors are required, Sentinel-2 and the Landsat series. For the best comparison, it is recommended not to mix these sensors though the bands are comparable but not identical. The baseline sensor is that of the reference year, and the analysis sensor the one we are interested in seeing the change of. Which sensors you choose may depend on the time period you are interested in.

      Baseline and Analysis Time Range: The two time periods with which we want to compare the land cover, these should be comparable seasonally. The baseline is the reference time period, whilst the analysis is the year we want to observe the changes in relation to the baseline. If the result has ‘holes’ in it (areas of no data), try increasing the time period, this is a result of cloud cover.
      
      Resolution: The spatial resolution of the product, in meters. As a minimum, this should be is the native spatial resolution of a sensor (10m for Sentinel-2, 30m for the Landsat series). Doing larger spatial resolutions (e.g. 100m) will mean your product will run quicker, and you can potentially look at larger areas but you may lose some of the spatial detail.
      
      Areas of Interest: The area that you, as the user, are interested in producing the NDVI Anomaly Product for. The larger this is, the longer the Data Cube will take to complete it. The Data Cube products were designed to be done on a regional basis rather than a national basis so, if your Area of Interest is too large, you may even get an error saying so. In this case, you will need to divide your Area of Interest into ‘chunks’ and then run each chunk separately.
      
      Coordinate Reference System: The Coordinate Reference System (CRS) desired for the Product. This is EPSG:3460 for Fiji, ‘Fiji 1986 / Fiji Map Grid’.
      
      Mosaic Type: This determines how all the data recorded in your time range, for each pixel, is combined. Current options include ‘median’ and ‘maximum’. `,
      direction: "rtl",
    },
    {
      type: "paragraph-with-image",
      subheading: "Outputs",
      image: "output-1.svg",
      text: `The output product is three single band GeoTiff files, with values ranging from -100 to 100, where negative values indicate a reduction in that fraction in the landcover, whilst positive indicates an increase in that fraction in the landcover of the associated pixel. 

      If ‘holes’ occur in your output, this could be due to two things:
      
      Water is present in your AOI – areas of water are masked out during processing.
      Cloud is present in your AOI – cloud is masked out during processing. `,
      direction: "ltr",
    },
  ],
  "Geomedian.Geomedian_Task": [
    {
      type: "header",
      text: "Geomedian",
    },
    {
      type: "paragraph-with-image",
      subheading: "Description",
      image: "Geomedian.png",
      text: `The geomedian is a multi-dimensional median known as a 'geometric median' of surface reflectance for each of the spectral measurements or bands over a time period.

      It is a method for generating pixel-based composite mosaics, in which a temporal stack is mosaiced to produce a higher-quality composite. This reduced the spatial noise whilst maintaining the spectral relationship between bands and consistency across scene boundaries. 
      
      If a large enough time period is selected, the geomedian product is the most appropriate way of getting a cloud-free composite. 
      
      See this paper for more information.`,
      direction: "ltr",
    },
    {
      type: "paragraph-with-image",
      subheading: "Parameters",
      imagefit: "contain",
      image: "cube-process.png",
      caption: "Cube process workflow for creation of geomedian products.",
      text: `Satellite: Two of the available sensors are applicable for the creation of geometric medians, Sentinel-2, and the Landsat series. Which of these sensors you choose depends on the time period of interest.

      Time Range: The time period from which the user would like the images for the analysis. If the result has ‘holes’ in it (areas of no data), try increasing the time period, this is a result of cloud cover.
      
      Coordinate Reference System: The Coordinate Reference System (CRS) desired for the product. This is EPSG:3460 for Fiji, ‘Fiji 1986 / Fiji Map Grid’.
      
      Area of Interest: The area the user is interested in for the product. The larger this is, the longer the Data Cube will take to complete it. The Data Cube products are designed to be done on a regional basis rather than a national basis, if the product takes too long to run, you will need to divide your Area of Interest into ‘chunks’ and then run each chunk separately.
      
      Resolution: The spatial resolution of the product, in meters. As a minimum, this should be is the native spatial resolution of a sensor (10m for Sentinel-2, 30m for the Landsat series). Doing larger spatial resolutions (e.g. 100m) will mean your product will run quicker, and you can potentially look at larger areas but you may lose some of the spatial detail.
      `,
      direction: "rtl",
    },
    {
      type: "paragraph-with-multiple-images",
      subheading: "Outputs",
      images: [
        {
          image: "output-1.png",
          caption:
            "Natural color band combination, with standard deviation stretch type applied.",
        },
        {
          image: "output-2.png",
          caption:
            "A false color composite, where the near-infrared band has been put into the red channel, the red band into the blue channel, and the green band into the blue channel. These band compinations emphasis areas of vegetation in red.",
        },
      ],
      direction: "ttb",
      text: `The output is a raster product in '.tif' format, with the same number of bands as the input product. It is a geometric median of all the images for that sensor in the time period selected. The bands can be viewed in different orders to give different views, e.g. Red, Green, Blue to give a natural colour image as above.`,
    },
  ],
  "S1Median.S1Median_Task": [
    {
      type: "header",
      text: "S1 Median",
    },
    {
      type: "coming-soon",
    },
  ],
};
