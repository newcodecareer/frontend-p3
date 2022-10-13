import {
  NeedsCardDiv,
  NeedsInfoDiv,
  Title,
  TitleDiv,
  PriceDiv,
  StatusDiv,
  NeedsStatus,
  UserIcon,
  PDiv,
} from "./NeedsCard.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faCalendar, faClock, faUser } from "@fortawesome/free-solid-svg-icons";

const location = "North Lakes";

const NeedsCard = () => {
  return (
    <NeedsCardDiv>
      <TitleDiv>
        <NeedsInfoDiv>
          <Title>Need Plumbers to fix residential toilet pipe blocked</Title>
          <PDiv>
            <FontAwesomeIcon icon={faLocationDot} />
            <p>{location}</p>
          </PDiv>
          <PDiv>
            <FontAwesomeIcon icon={faCalendar} />
            <p>Sun, 11 Oct</p>
          </PDiv>
          <PDiv>
            <FontAwesomeIcon icon={faClock} />
            <p>Anytime</p>
          </PDiv>
        </NeedsInfoDiv>
        <PriceDiv>
          <p>$300</p>
          <UserIcon>
            <FontAwesomeIcon icon={faUser} />
          </UserIcon>
        </PriceDiv>
      </TitleDiv>

      <StatusDiv>
        <NeedsStatus>OPEN</NeedsStatus> <span>3 offers</span>
      </StatusDiv>
    </NeedsCardDiv>
  );
};
export default NeedsCard;
