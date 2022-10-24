import styled from "styled-components";

export const BannerContainer = styled.div`
  width: 100%;
  position: relative;
  height: 80vh;
  width: 100%;

  &:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -1;
    opacity: 0.5;

    background-image: url("https://www.brightonhomes.net.au/sites/default/files/house-plans-brisbane-lp.jpg");
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
  }
`;

export const Information = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  max-width: 900px;
  height: auto;
  text-align: center;
  background: rgba(255, 255, 255, 0.6);
  border-radius: 10px;
  padding: 50px 50px;
`;

export const Title = styled.h1`
  position: relative;
  height: auto;
  font-size: 3rem;
  margin-top: 20px;
`;

// .banner .info input{
//     width: 30rem;
//     background-color: rgba(255, 255, 255);
//     border-radius: 5px;
//     border: 1px solid #eaeaea;
//     padding: 10px;
//     outline: none;
//     font-size: 1rem;
//     color: var(--second-color);
// }

// .banner .info input::placeholder{
//     overflow: hidden;
//     color: var(--placeholder-color);
// }

export const GetQuoteBtn = styled.button`
  color: rgb(255, 255, 255);
  font-size: 1.5rem;
  border: none;
  background-color: ${(props) => props.inputColor || "#f77f00"};
  border-radius: 5px;
  padding: 10px;
  margin: 25px;
  cursor: pointer;
  font-weight: 600;
  &:hover {
    filter: brightness(1.2);
  }
`;
