import styled from "styled-components";
import {
  primaryThemeColor,
  primaryFontColor,
  secondaryFontColor,
  thirdFontColor,
  primaryShadowColor,
  primaryBorderColor,
} from "../../../common/index.styles";

export const NeedsCardContainer = styled.div`
  width: 100%;
  min-width: 300px;
  padding: 0 1rem 0.5rem;
  display: flex;
  flex-direction: column;
  border-top: solid 0.1px ${thirdFontColor};
  box-shadow: 0 1px 3px ${primaryShadowColor};
  border-radius: 6px;
  color: ${primaryFontColor};
  border-left: solid 5px ${primaryThemeColor};
  margin-bottom: 1rem;

  &:hover {
    box-shadow: 0 5px 15px ${primaryShadowColor};
    cursor: pointer;
  }
`;

export const TitleContainer = styled.div`
  border-bottom: solid 1px ${primaryBorderColor};
  display: flex;
  justify-content: center;
`;

export const Title = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.5;
`;

export const NeedsInfoContainer = styled.div`
  width: 78%;
  margin-right: 2%;
`;

export const ParagraphContainer = styled.div`
  font-size: 0.8rem;
  display: flex;
  align-items: center;
  gap: 3%;
  color: ${secondaryFontColor};
  margin-top: -9%;
`;

export const PriceContainer = styled.div`
  width: 20%;
  font-size: 1.5rem;
  font-weight: 600;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  line-height: 1;
`;

export const UserIcon = styled.div`
  font-size: 2.4rem;
  color: ${thirdFontColor};
  border: solid 3px ${thirdFontColor};
  display: flex;
  /* padding: 4px 6px; */
  border-radius: 50%;
`;

export const StatusContainer = styled.div`
  font-size: 0.8rem;
  margin-top: 0.5rem;
  color: ${secondaryFontColor};
`;

export const NeedsStatus = styled.span`
  font-size: 0.8rem;
  color: ${primaryThemeColor};
  font-weight: 600;
  margin-right: 10%;
`;
