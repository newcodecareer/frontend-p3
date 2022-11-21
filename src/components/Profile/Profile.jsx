import React from "react";
import { primaryThemeColor } from "../common/index.styles";
import ABNInfo from "./ABNInfo";
// import About from "./About";
import Address from "./Address";
import Birthday from "./Birthday";
// import Portfolio from "./Portfolio";
import { Button, Form, ProfileContainer } from "./Profile.styles";
import ProfileImage from "./ProfileImage";
import ProfileInfo from "./ProfileInfo";
import Skills from "./Skills";

const Profile = () => {
  return (
    <ProfileContainer>
      <Form>
        <ProfileImage />
        <ProfileInfo />
        <Address />
        {/* <About /> */}
        {/* <Portfolio /> */}
        <Skills />
        <Birthday />
        <ABNInfo />
        <Button inputBackgroundColor={`${primaryThemeColor}`}>Save Profile</Button>
      </Form>
      <Button inputBackgroundColor="#c90000">Deactivate Account</Button>
    </ProfileContainer>
  );
};

export default Profile;
