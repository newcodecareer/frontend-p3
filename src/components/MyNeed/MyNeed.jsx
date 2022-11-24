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

const MyNeed = () => {
  return (
    <MyNeedContainer>
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
        <NeedDetails>
          <Needheader>
            <NeedTitle>Help move sofa</NeedTitle>
            <EditBtn>Edit</EditBtn>
          </Needheader>
          <NeedLocation>
            <FontAwesomeIcon icon={faLocationDot} />
            &nbsp;&nbsp;Mountain Creek QLD 4557, Australia
          </NeedLocation>
          <NeedInfo>small sofa move from QLD to Sydney around 13/11/2022</NeedInfo>
          <DueDate>Due Date</DueDate>
          <DateDay>
            {/* <FontAwesomeIcon icon={faCalendarDays} />&nbsp; */}
            Oct 20
          </DateDay>
          <PriceTitle>Price</PriceTitle>
          <PriceNumber>
            <FontAwesomeIcon icon={faDollarSign} />
            &nbsp; 200
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
