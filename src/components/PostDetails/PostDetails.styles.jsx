import styled from "styled-components";

export const Background = styled.div`
  width: 1950px;
  min-height: 1020px;
  background: #f5f5f5;
  padding: 50px;

  display: flex;
  justify-content: flex-end;
`;

export const DetailContainer = styled.div`
  width: 950px;
  height: 920px;
  padding: 50px;
  background: white;

  overflow-y: scroll;
`;

export const HeadingContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 40px;
`;

export const Status = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  margin-bottom: 30px;
`;

export const StatusInfoDefault = styled.div`
  margin-right: 30px;
  width: 82px;
  height: 32px;

  background: #f77f00;
  border-radius: 11px;

  color: #ffffff;
  font-weight: 800;
  line-height: 19px;
  letter-spacing: -0.6px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StatusInfo = styled.div`
  margin-right: 30px;
  width: 82px;
  height: 32px;

  color: #b4b4b4;
  font-weight: 800;
  line-height: 19px;
  letter-spacing: -0.6px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Heading = styled.div`
  width: 552px;
  height: 112px;

  color: #000000;
  font-size: 38px;
  line-height: 46px;
`;

export const Link = styled.a`
  color: #f77f00;
  line-height: 19px;
`;

export const HeadingRight = styled.div`
  width: 264px;
  height: 203px;

  border: 2px solid #d9d9d9;
  border-radius: 9px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const BudgetLabel = styled.p`
  font-weight: 600;
  line-height: 19px;
  margin: 10px 0 0;

  color: #959494;
`;

export const Budget = styled.h1`
  width: 92px;
  height: 46px;
  margin: 22px 0 0;

  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 38px;
  line-height: 46px;
`;

export const Button = styled.button`
  padding: 20px;
  margin: 20px 0 0;

  width: 225px;
  height: 55px;

  background: #f77f00;
  border: none;
  border-radius: 11px;

  font-family: "Inter";
  font-weight: 800;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: -0.2px;

  color: #ffffff;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;

export const Icon = styled.img`
  width: 51px;
  height: 51px;
  margin-right: 20px;
`;

export const Label = styled.p`
  font-family: "Inter";
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;

  color: #959494;
  margin: 0 0 7px;
`;

export const InfoDefault = styled.p`
  font-family: "Inter";
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;

  color: #f77f00;
  margin: 0 0 25px;
`;

export const Info = styled.p`
  font-family: "Inter";
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  margin: 0 0 25px;
`;

export const BreakLine = styled.hr`
  width: 490px;
  height: 0px;
  border: 1px solid #f5f5f5;
  margin: 0 0 25px;
`;

export const DescriptionContainer = styled.div`
  margin: 10px 0 0;
`;

export const Paragraph = styled.p`
  margin: 20px 0 0;

  font-family: "Inter";
  font-weight: 500;
  font-size: 16px;
  line-height: 25px;

  color: #959494;
`;

export const ImageContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  margin-top: 20px;
`;

export const PostImg = styled.img`
  width: 126px;
  height: 126px;
  margin-right: 20px;
`;

export const SectionLine = styled.hr`
  width: 850px;
  height: 0px;
  border: 1px solid #f5f5f5;
  margin: 40px 0 30px;
`;

export const TradieWrapper = styled.div`
  margin: 40px 0 30px;

  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const Avatar = styled.img`
  width: 100px;
  height: 100px;
`;

export const TradieName = styled.p`
  font-family: "Inter";
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;

  color: #f77f00;
  margin-left: 20px;
`;

export const OfferParagraph = styled.p`
  background: #f5f5f5;
  border-radius: 5px;

  width: 815px;
  min-height: 40px;
  max-height: 150px;
  margin: 0;
  padding: 15px;

  font-family: "Inter";
  font-weight: 500;
  font-size: 16px;
  line-height: 25px;

  overflow-y: auto;
`;

export const TimeReply = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;

  margin-top: 15px;
`;

export const Time = styled.span`
  font-family: "Inter";
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;

  color: #959494;
  margin-right: 30px;
`;

export const ReplyWrapper = styled.div`
  width: 60px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const ReplyIcon = styled.img`
  width: 14px;
  height: 18px;
`;

export const Reply = styled.span`
  font-family: "Inter";
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;

  color: #f77f00;
`;
