import { MapContainer, TileLayer, FeatureGroup } from "react-leaflet";
import { EditControl } from "react-leaflet-draw";

import onClickOutside from "react-onclickoutside";

const DrawMap = ({ setAOI, showMap }) => {
  DrawMap.handleClickOutside = () => {
    showMap(false);
  };

  const handleCreate = (e) => {
    const bounds = e.layer._bounds;

    const minX = bounds._southWest.lng;
    const minY = bounds._southWest.lat;
    const maxX = bounds._northEast.lng;
    const maxY = bounds._northEast.lat;


    const aoi = 'POLYGON((' + 
      minX + ' ' + minY + ',' +
      maxX + ' ' + minY + ',' +
      maxX + ' ' + maxY + ',' +
      minX + ' ' + maxY + ',' +
      minX + ' ' + minY + '))'

    setAOI(aoi);
  };

  const handleDelete = () => {
    setAOI('');
  }

  const handleMount = () => {
    console.log('Mounted ::')
    const drawTool = document.getElementsByClassName('leaflet-draw-draw-rectangle')
    if (drawTool.length === 1) {
      drawTool[0].click()
    }
  }

  return (
    <>
      <MapContainer center={[-17.5, 178.5]} zoom={7}>
        <FeatureGroup>
          <EditControl
            position="topright"
            onCreated={handleCreate}
            onDeleted={handleDelete}
            onMounted={handleMount}
            draw={{
              rectangle: true,
              polyline: false,
              polygon: false,
              circle: false,
              marker: false,
              circlemarker: false,
            }}
            edit={{
              edit: false,
            }}
          />
        </FeatureGroup>

        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.osm.org/{z}/{x}/{y}.png"
        />
      </MapContainer>
    </>
  );
};

const clickOutsideConfig = {
  handleClickOutside: () => DrawMap.handleClickOutside,
};

export default onClickOutside(DrawMap, clickOutsideConfig);
