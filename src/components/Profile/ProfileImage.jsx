import { HiUser } from "react-icons/hi2";
import { FiEdit2 } from "react-icons/fi";
import { BtnImage, ImageContainer } from "./Profile.styles";

const ProfileImage = () => {
  return (
    <ImageContainer>
      <span>
        <HiUser />
      </span>
      <BtnImage inputPosition="absolute">
        <FiEdit2 />
      </BtnImage>
    </ImageContainer>
  );
};

export default ProfileImage;
