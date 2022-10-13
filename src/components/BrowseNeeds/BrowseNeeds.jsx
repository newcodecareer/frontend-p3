import { useState } from "react";
import { BrowseNeedsDiv } from "./BrowseNeeds.styles";
import NeedsContainer from "./NeedsContainer/NeedsContainer";
import NeedsMap from "./NeedsMap/NeedsMap";

const BrowseNeeds = () => {
  const [location, setLocation] = useState('');
  return (
    <BrowseNeedsDiv>
      <NeedsContainer location={location} setLocation={setLocation} />
      <NeedsMap location={location} />
    </BrowseNeedsDiv>
  );
};

export default BrowseNeeds;
