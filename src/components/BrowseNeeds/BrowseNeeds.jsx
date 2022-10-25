import { useState } from "react";
import { BrowseNeedsSection, NeedsSection } from "./BrowseNeeds.styles";
import NeedsContainer from "./NeedsContainer/NeedsContainer";
import NeedsMap from "./NeedsMap/NeedsMap";
import SearchFilters from "../SearchFilters/SearchFilters";

const BrowseNeeds = (props) => {
  const [location, setLocation] = useState("");

  return (
    <BrowseNeedsSection>
      <SearchFilters />
      <NeedsSection>
        <NeedsContainer location={location} setLocation={setLocation} />
        <NeedsMap location={location} />
      </NeedsSection>
    </BrowseNeedsSection>
  );
};

export default BrowseNeeds;
