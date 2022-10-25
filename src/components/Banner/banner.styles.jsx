import styled from "styled-components";
import { btnFontColor, fontFamily, fontSizeXL, primaryThemeColor } from "../common/index.styles";

export const BannerContainer = styled.div`
  width: 100%;
  position: relative;
  height: 80vh;
  width: 100%;
  padding: 1rem 0;
  font-family: ${fontFamily};

  &:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -1;
    opacity: 0.5;
    border-radius: 15px;
    background-image: url("https://www.brightonhomes.net.au/sites/default/files/styles/one_item_block/public/BLK49C-double-storey-home-design-kitchen.jpg?itok=6WxuryTE");
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
  padding: 3rem;
`;

export const Title = styled.h1`
  position: relative;
  height: auto;
  font-size: 3rem;
  margin-top: 1.2rem;
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

export const BrowseTaskBtn = styled.button`
  color: ${btnFontColor};
  font-size: ${fontSizeXL};
  border: none;
  background-color: ${(props) => props.inputColor || `${primaryThemeColor}`};
  border-radius: 8px;
  padding: 1rem 2rem;
  margin: 1.5rem;
  cursor: pointer;
  font-weight: 600;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
  &:hover {
    filter: brightness(1.2);
  }
`;
