import { NeedsMapDiv, StyledMapContainer } from "./NeedsMap.styles";
import { TileLayer, Marker, Popup } from "react-leaflet";

const NeedsMap = () => {
  return (
    <NeedsMapDiv>
      <StyledMapContainer
        className="mapSize"
        center={[-27.5, 153]}
        zoom={11}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[-27.47, 153.02]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </StyledMapContainer>
    </NeedsMapDiv>
  );
};

export default NeedsMap;
