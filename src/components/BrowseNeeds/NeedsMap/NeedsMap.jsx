import { NeedsMapContainer, StyledMapContainer } from "./NeedsMap.styles";
import { TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

const icon = L.icon({
  iconUrl: "../src/images/placeholder.png",
  iconSize: [38, 38],
});

const position = [-27.48, 153.02];

const NeedsMap = () => {
  return (
    <NeedsMapContainer>
      <StyledMapContainer className="mapSize" center={position} zoom={11}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=H2yI2WkdBisakXqHODp5"
        />
        <Marker position={position} icon={icon}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </StyledMapContainer>
    </NeedsMapContainer>
  );
};

export default NeedsMap;
