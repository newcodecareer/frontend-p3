import styled from "styled-components";

export const NeedsCardDiv = styled.div`
  width: 100%;
  min-width: 300px;
  padding: 0 1rem 0.5rem 1rem;
  display: flex;
  flex-direction: column;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  border-radius: 6px;
  color: rgb(55, 55, 55);
  border-left: solid 5px #f77f00;
  margin-bottom: 1rem;

  &:hover {
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    cursor: pointer;
  }
`;

export const TitleDiv = styled.div`
  border-bottom: solid 1px lightgray;
  display: flex;
  justify-content: center;
`;

export const Title = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.5;
`;

export const NeedsInfoDiv = styled.div`
  width: 78%;
  margin-right: 2%;
`;

export const PDiv = styled.div`
  font-size: 0.8rem;
  display: flex;
  align-items: center;
  gap: 3%;
  color: rgb(150, 150, 150);
  margin-top: -9%;
`;

export const PriceDiv = styled.div`
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
  font-size: 2rem;
  color: rgb(200, 200, 200);
  border: solid 3px rgb(200, 200, 200);
  padding: 4px 6px;
  border-radius: 50%;
`;

export const StatusDiv = styled.div`
  font-size: 0.8rem;
  margin-top: 0.5rem;
  color: rgb(150, 150, 150);
`;

export const NeedsStatus = styled.span`
  font-size: 0.8rem;
  color: #f77f00;
  font-weight: 600;
  margin-right: 10%;
`;
