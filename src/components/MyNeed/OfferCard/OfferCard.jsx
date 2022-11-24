import {
  CardContainer,
  Price,
  PortraitBox,
  RoundPortrait,
  PriceDescription,
  Rating,
  AcceptButton,
  Username,
  OfferDetails,
  CompletionRate,
  RatingBox,
  StarIcon,
  PriceBox,
  BtnBox,
  Verification,
  InfoBox,
  CommentBox,
  Comment,
  TickIcon,
} from "./OfferCard.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faStar } from "@fortawesome/free-solid-svg-icons";

const OfferCard = () => {
  return (
    <CardContainer>
      <OfferDetails>
        <InfoBox>
          <PortraitBox>
            <RoundPortrait src="../../../images/cat.jpeg" />
          </PortraitBox>
          <Username>Gurpreet S.</Username>
          <RatingBox>
            <Rating>
              <StarIcon>
                <FontAwesomeIcon icon={faStar} />
              </StarIcon>
              5.0
            </Rating>
            <CompletionRate>&brvbar; &nbsp; 95% completion rate</CompletionRate>
          </RatingBox>

          <Verification>
            <TickIcon>
              <FontAwesomeIcon icon={faCheck} />
            </TickIcon>
            ID Verified
          </Verification>

          <BtnBox>
            <AcceptButton>Accept</AcceptButton>
            <PriceBox>
              <Price>$120</Price>
              <PriceDescription>Offer Price</PriceDescription>
            </PriceBox>
          </BtnBox>
        </InfoBox>

        <CommentBox>
          <Comment>I am a experiened cat and can help load and unload</Comment>
        </CommentBox>
      </OfferDetails>
    </CardContainer>
  );
};
export default OfferCard;
