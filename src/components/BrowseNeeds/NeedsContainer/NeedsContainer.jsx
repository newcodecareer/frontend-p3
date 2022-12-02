import NeedsCard from "./NeedsCard/NeedsCard";
import { NeedsContainerSection } from "./NeedsContainer.styles";
import axios from "axios";
import { useEffect, useState } from "react";

// TODO temporary use for displaying cards, will use API mapping later
const NeedsContainer = () => {
  const [browseDatas, setBrowseDatas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/v1/posts`);
        setBrowseDatas(response.data);
        setError(null);
      } catch (err) {
        setError(err.message);
        setBrowseDatas(null);
      } finally {
        setLoading(false);
        console.log("ok");
      }
    };
    getData();
  }, []);

  // console.log(browseDatas);
   if (!browseDatas){
    setBrowseDatas(
      [{
          title: "move a sofa for me",
          location: "sunshine coast, 4551",
          onDate: "11/11/2023",
          budget: "100",
          details: "Just need one guy to move the sofa this weekend",
          id: Math.random(),
          key: Math.random(),
        }]
    )
   }
      
  return (
    <NeedsContainerSection>
      {loading && <div>A moment please...</div>}
      {error && <div>{`There is a problem fetching the post data - ${error}`}</div>}
    
      {browseDatas.map((browseData) => (
        <NeedsCard
          title={browseData.title}
          location={browseData.location}
          onDate={browseData.onDate}
          budget={browseData.budget}
          details={browseData.details}
          id={browseData.id}
          key={browseData.id}
        />
      ))}
    </NeedsContainerSection>
  );
};

export default NeedsContainer;
