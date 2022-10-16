import { useState } from "react";
import { BrowseNeedsSection } from "./BrowseNeeds.styles";
import NeedsContainer from "./NeedsContainer/NeedsContainer";
import NeedsMap from "./NeedsMap/NeedsMap";

const BrowseNeeds = () => {
  const [location, setLocation] = useState("");
  return (
    <BrowseNeedsSection>
      <NeedsContainer location={location} setLocation={setLocation} />
      <NeedsMap location={location} />
    </BrowseNeedsSection>
  );
};

export default BrowseNeeds;
