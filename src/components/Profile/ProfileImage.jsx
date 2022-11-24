// import { useState } from "react";
// import UploadAvatar from "../UploadAvatar/UploadAvatar";
import { HiUser } from "react-icons/hi2";
import { FiEdit2 } from "react-icons/fi";
// import { primaryThemeColor } from "../common/index.styles";
import { BtnImage, ImageContainer } from "./Profile.styles";

const ProfileImage = () => {
  // const showIcon = (preview) =>{
  //   return(<img src = {preview}/>)
  // }
  // const [avatar, setAvatar] = useState(false);
  return (
    <ImageContainer>
      {/* {avatar ? (
          <div>
            <UploadAvatar />
            <ButtonContainer>
              <Button onClick={() => setAvatar(false)}>Cancel</Button>
              <Button inputBackgroundColor={`${primaryThemeColor}`}>Save</Button>
            </ButtonContainer>
          </div>
        ) : (
          <DataContainer>
            
            <div>
            <UploadAvatar onShowIcon = {showIcon}/>
              <BtnImage onClick={() => setAvatar(true)}>
                <FiEdit2 />
                
              </BtnImage>
            </div>
        </DataContainer>
      )} */}
      {/* <div>
        <UploadAvatar onShowIcon = {showIcon}/>
      </div> */}
      <span>
        <HiUser />
      </span>
      <BtnImage
        inputPosition="absolute"
        onClick={() => {
          window.location.href = "/avatar";
        }}
      >
        <FiEdit2 />
      </BtnImage>
      {/* // <Button onClick={() => {window.location.href="/avatar"}}>
      //   <FiEdit2 />
      // </Button> */}
    </ImageContainer>
  );
};

export default ProfileImage;
