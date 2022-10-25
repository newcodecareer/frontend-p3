import {
  NeedsCardContainer,
  NeedsInfoContainer,
  Title,
  TitleContainer,
  PriceContainer,
  StatusContainer,
  NeedsStatus,
  UserIcon,
  ParagraphContainer,
} from "./NeedsCard.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faCalendar, faClock, faUser } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { PostContext } from "../../../../context/PostContext";
import PostDetails from "../../../PostDetails/PostDetails";

// TODO temporary use location, will use api mapping later
const location = "North Lakes";

const NeedsCard = () => {
  const { setShowPost } = useContext(PostContext);
  const handleClick = (event) => {
    setShowPost((current) => !current);
  };

  return (
    <>
      <NeedsCardContainer onClick={handleClick}>
        <TitleContainer>
          <NeedsInfoContainer>
            <Title>Need Plumbers to fix residential toilet pipe blocked</Title>
            <ParagraphContainer>
              <FontAwesomeIcon icon={faLocationDot} />
              <p>{location}</p>
            </ParagraphContainer>
            <ParagraphContainer>
              <FontAwesomeIcon icon={faCalendar} />
              <p>Sun, 11 Oct</p>
            </ParagraphContainer>
            <ParagraphContainer>
              <FontAwesomeIcon icon={faClock} />
              <p>Anytime</p>
            </ParagraphContainer>
          </NeedsInfoContainer>
          <PriceContainer>
            <p>$300</p>
            <UserIcon>
              <FontAwesomeIcon icon={faUser} />
            </UserIcon>
          </PriceContainer>
        </TitleContainer>
        <StatusContainer>
          <NeedsStatus>OPEN</NeedsStatus> <span>3 offers</span>
        </StatusContainer>
      </NeedsCardContainer>
      {setShowPost ? "" : <PostDetails />}
    </>
  );
};
export default NeedsCard;
