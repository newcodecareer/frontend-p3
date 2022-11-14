import { useState } from "react";
import { BrowseNeedsSection, NeedsSection } from "./BrowseNeeds.styles";
import NeedsContainer from "./NeedsContainer/NeedsContainer";
import NeedsMap from "./NeedsMap/NeedsMap";
import SearchFilters from "../SearchFilters/SearchFilters";
import { PostContext } from "../../context/PostContext";
import PostDetails from "../PostDetails/PostDetails";

const BrowseNeeds = () => {
  const [location, setLocation] = useState("");
  const [showPost, setShowPost] = useState(false);

  return (
    <PostContext.Provider value={{ setShowPost }}>
      <BrowseNeedsSection>
        <SearchFilters />
        <NeedsSection showPost={showPost}>
          <NeedsContainer location={location} setLocation={setLocation} />
          {showPost ? <PostDetails /> : <NeedsMap location={location} />}
        </NeedsSection>
      </BrowseNeedsSection>
    </PostContext.Provider>
  );
};

export default BrowseNeeds;
