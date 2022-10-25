import styled from "styled-components";
import { MapContainer } from "react-leaflet";

export const NeedsMapContainer = styled.div`
  flex-basis: 65%;
  height: calc(100vh - 7rem);
  margin: 1rem 0;
  padding-bottom: 1.5rem;
  z-index: 1;
`;

export const StyledMapContainer = styled(MapContainer)`
  width: 100%;
  height: 100%;
`;
