import styled from "styled-components";

export const Background = styled.div`
  background: #f5f5f5;
  padding: 10px;
  
  display: flex;
  justify-content: flex-end;
`;

export const DetailContainer = styled.div`
  width: 45%;
  height: 720px;
  padding: 30px;
  background: white;

  overflow-y: scroll;
`;

export const HeadingContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
`;

export const Status = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const StatusInfoDefault = styled.div`
  margin-right: 20px;
  width: 60px;
  height: 20px;

  background: #f77f00;
  border-radius: 7px;

  color: #ffffff;
  font-weight: 600;
  font-size: 12px;
  letter-spacing: -0.6px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StatusInfo = styled.div`
  margin-right: 25px;
  width: 60px;
  height: 20px;

  color: #b4b4b4;
  font-weight: 600;
  font-size: 12px;
  letter-spacing: -0.6px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Heading = styled.h1`
  font-weight: 500;
  font-size: 25px;
  letter-spacing: -0.6px;
  margin: 15px 0 5px 0;
`;

export const Link = styled.a`
  color: #f77f00;
  font-size: 12px;
  letter-spacing: -0.6px;
  display: block;
  margin-bottom: 20px;
`;

export const HeadingRight = styled.div`
  width: 140px;
  height: 120px;

  border: 2px solid #d9d9d9;
  border-radius: 7px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const BudgetLabel = styled.p`
  font-weight: 600;
  font-size: 12px;
  color: #959494;
  margin: 0 0 15px 0;
`;

export const Budget = styled.h1`
  font-family: "Inter";
  font-weight: 500;
  font-size: 20px;
  margin: 0 0 15px 0;
`;

export const Button = styled.button`
  width: 115px;
  height: 30px;

  background: #f77f00;
  border: none;
  border-radius: 7px;

  font-family: "Inter";
  font-weight: 600;
  font-size: 12px;
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
  align-items: flex-start;
`;

export const Icon = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 10px;
  padding: 0;
`;

export const Label = styled.p`
  font-family: "Inter";
  font-weight: 600;
  font-size: 12px;

  color: #959494;
  margin: 0;
`;

export const InfoDefault = styled.p`
  font-family: "Inter";
  font-weight: 600;
  font-size: 12px;

  color: #f77f00;
  margin: 0 0 10px;
`;

export const Info = styled.p`
  font-family: "Inter";
  font-weight: 500;
  font-size: 12px;
  margin: 0 0 10px;
`;

export const BreakLine = styled.hr`
  width: 280px;
  height: 0px;
  border: 1px solid #f5f5f5;
  margin: 0 0 15px;
`;

export const DescriptionContainer = styled.div`
  margin: 5px 0 0;
`;

export const Paragraph = styled.p`
  margin: 5px 0 0;

  font-family: "Inter";
  font-weight: 500;
  font-size: 12px;
  line-height: 25px;

  color: #959494;
`;

export const ImageContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  margin-top: 10px;
`;

export const PostImg = styled.img`
  width: 80px;
  height: 80px;
  margin-right: 20px;
`;

export const SectionLine = styled.hr`
  width: 550px;
  height: 0px;
  border: 1px solid #f5f5f5;
  margin: 20px 0 30px;
`;

export const TradieWrapper = styled.div`
  margin: 15px 0 10px;

  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const Avatar = styled.img`
  width: 40px;
  height: 40px;
  padding: 0;
`;

export const TradieName = styled.p`
  font-family: "Inter";
  font-weight: 500;
  font-size: 14px;

  color: #f77f00;
  margin-left: 20px;
`;

export const OfferParagraph = styled.p`
  background: #f5f5f5;
  border-radius: 5px;

  width: 500px;
  min-height: 30px;
  max-height: 150px;
  margin: 0;
  padding: 15px;

  font-family: "Inter";
  font-weight: 500;
  font-size: 12px;
  line-height: 20px;

  overflow-y: auto;
`;

export const TimeReply = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;

  margin-top: 10px;
`;

export const Time = styled.span`
  font-family: "Inter";
  font-weight: 500;
  font-size: 12px;

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
  padding: 0;
`;

export const Reply = styled.span`
  font-family: "Inter";
  font-weight: 500;
  font-size: 12px;

  color: #f77f00;
`;
