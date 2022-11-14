import { useState } from "react";
import { BrowseNeedsSection, NeedsSection } from "../BrowseNeeds/BrowseNeeds.styles";
import NeedsContainer from "../BrowseNeeds/NeedsContainer/NeedsContainer";
import NeedsMap from "../BrowseNeeds/NeedsMap/NeedsMap";
import Nav from "./Nav";
import { PostContext } from "../../context/PostContext";
import PostDetails from "../PostDetails/PostDetails";

const MyNeeds = () => {
  const [location, setLocation] = useState("");
  const [showPost, setShowPost] = useState(false);
  
  return (
    <PostContext.Provider value={{ setShowPost }}>
      <BrowseNeedsSection>
        <Nav />
        <NeedsSection showPost={showPost}>
          <NeedsContainer location={location} setLocation={setLocation} />
          {showPost ? <PostDetails /> : <NeedsMap location={location} />}
        </NeedsSection>
      </BrowseNeedsSection>
    </PostContext.Provider>
  );
};
    
export default MyNeeds;
