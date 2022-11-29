import React, { useState, useEffect } from "react";
import { api, parseJwt } from "../../utils/axios";
import ABNInfo from "./ABNInfo";
// import About from "./About";
import Address from "./Address";
import Birthday from "./Birthday";
// import Portfolio from "./Portfolio";
import { Button, Form, ProfileContainer } from "./Profile.styles";
import ProfileImage from "./ProfileImage";
import ProfileInfo from "./ProfileInfo";
import Skills from "./Skills";

const userData = parseJwt(localStorage.getItem("token"));

const Profile = () => {
  const [profileData, setProfileData] = useState({});

  useEffect(() => {
    const getData = async () => {
      const profileData = await api(`customers/${userData.id}`, {
        method: "get",
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      setProfileData(profileData.data);
    };
    getData();
  }, []);
  console.log("profile data", profileData);
  const firstName = profileData.firstName;
  const lastName = profileData.lastName;
  localStorage.setItem("first name", firstName);
  localStorage.setItem("last name", lastName);

  return (
    <ProfileContainer>
      <ProfileImage />
      <Form>
        <ProfileInfo firstname={firstName} lastname={lastName} />
        <Address />
        {/* <About /> */}
        {/* <Portfolio /> */}
        <Skills />
        <Birthday />
        <ABNInfo />
        {/* <Button inputBackgroundColor={`${primaryThemeColor}`}>Save Profile</Button> */}
      </Form>
      <Button inputBackgroundColor="#c90000">Deactivate Account</Button>
    </ProfileContainer>
  );
};

export default Profile;
