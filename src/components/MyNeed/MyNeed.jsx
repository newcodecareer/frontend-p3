import {
  MyNeedContainer,
  Title,
  Description,
  View,
  Offer,
  NeedDetails,
  NeedTitle,
  Needheader,
  EditBtn,
  NeedLocation,
  NeedInfo,
  CheckOffer,
  NeedBox,
  OfferTitle,
  Offerheader,
  OfferNumber,
  DueDate,
  DateDay,
  PriceTitle,
  PriceNumber,
  OfferBox,
} from "./MyNeed.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDollarSign,
  // faCalendarDays,
  faEye,
  faLocationDot,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
import OfferCard from "./OfferCard/OfferCard";
// import { api } from "../../utils/axios";
import axios from "axios";
// import {postsData} from '../API/PostsData';
import { useEffect, useState } from "react";

const MyNeed = () => {
  const [needsData, setNeedsData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // useEffect( () => {
  //   api("http://localhost:3000/v1/posts", {
  //     method: "get",
  //     headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  //   })
  //     .then((response) => {
  //       setNeedsData(response.data);
  //     })
  //     .catch((err) => {
  //       if (err) {
  //         console.log(err);
  //       }
  //     });
  // },[]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/v1/posts`);
        setNeedsData(response.data);
        setError(null);
      } catch (err) {
        setError(err.message);
        setNeedsData(null);
      } finally {
        setLoading(false);
        console.log("ok");
      }
    };
    getData();
  }, []);

  // console.log(needsData.slice(-1));
  const [{ title, location, onDate, budget, details }] = needsData
    ? needsData.slice(-1)
    : [
        {
          title: "move a sofa for me",
          location: "sunshine coast, 4551",
          onDate: "11/11/2023",
          budget: "100",
          details: "Just need one guy to move the sofa this weekend",
        },
      ];

  return (
    <MyNeedContainer>
      {loading && <div>A moment please...</div>}
      {error && <div>{`There is a problem fetching the post data - ${error}`}</div>}
      <NeedBox>
        <Offer>
          <CheckOffer>
            <FontAwesomeIcon icon={faPaperPlane} />
            &nbsp;&nbsp;Check your offers!
          </CheckOffer>
          <Title>You have 5 Offers</Title>
          <Description>
            Discuss details with Taskers and accept an offer <br /> when you are ready.
          </Description>
          <View>
            <FontAwesomeIcon icon={faEye} />
            &nbsp;22 views
          </View>
          <OfferTitle>
            <Offerheader>Offers</Offerheader>
            <OfferNumber>&#40;5&#41;</OfferNumber>
          </OfferTitle>
        </Offer>

        {/* details of my need card */}
        <NeedDetails>
          <Needheader>
            <NeedTitle>{title}</NeedTitle>
            <EditBtn>Edit</EditBtn>
          </Needheader>
          <NeedLocation>
            <FontAwesomeIcon icon={faLocationDot} />
            &nbsp;&nbsp; {location}
          </NeedLocation>
          <NeedInfo>{details}</NeedInfo>
          <DueDate>Due Date</DueDate>
          <DateDay>
            {/* <FontAwesomeIcon icon={faCalendarDays} />&nbsp; */}
            {onDate}
          </DateDay>
          <PriceTitle>Budget</PriceTitle>
          <PriceNumber>
            <FontAwesomeIcon icon={faDollarSign} />
            &nbsp; {budget}
          </PriceNumber>
        </NeedDetails>
      </NeedBox>
      <OfferBox>
        <OfferCard />
        <OfferCard />
        <OfferCard />
      </OfferBox>
    </MyNeedContainer>
  );
};
export default MyNeed;
