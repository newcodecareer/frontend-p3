import { BrowseNeedsDiv } from "./BrowseNeeds.styles";
import NeedsContainer from "./NeedsContainer/NeedsContainer";
import NeedsMap from "./NeedsMap/NeedsMap";

const BrowseNeeds = () => {
  return (
    <BrowseNeedsDiv>
      <NeedsContainer />
      <NeedsMap />
    </BrowseNeedsDiv>
  );
};

export default BrowseNeeds;
