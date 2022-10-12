import styled from "styled-components";
import { MapContainer } from "react-leaflet";

export const NeedsMapDiv = styled.div`
  width: 65%;
  height: calc(100vh - 3rem);
  margin: 1rem 0;
  padding-bottom: 1.5rem;
`;

export const StyledMapContainer = styled(MapContainer)`
  width: 100%;
  height: 100%;
`;