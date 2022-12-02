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
  const address = profileData.address;
  const ABN = profileData.ABN;
  const birthdayDay = profileData.birthdayDay;
  const birthdayMonth = profileData.birthdayMonth;
  const birthdayYear = profileData.birthdayYear;
  const skillOne = profileData.skillOne;
  const skillTwo = profileData.skillTwo;
  const skillThree = profileData.skillThree;
  const skillFour = profileData.skillFour;

  localStorage.setItem("first name", firstName);
  localStorage.setItem("last name", lastName);
  localStorage.setItem("address", address);
  localStorage.setItem("birthdayDay", birthdayDay);
  localStorage.setItem("birthdayMonth", birthdayMonth);
  localStorage.setItem("birthdayYear", birthdayYear);
  localStorage.setItem("ABN", ABN);
  localStorage.setItem("skillOne", skillOne);
  localStorage.setItem("skillTwo", skillTwo);
  localStorage.setItem("skillThree", skillThree);
  localStorage.setItem("skillFour", skillFour);

  return (
    <ProfileContainer>
      <ProfileImage />
      <Form>
        <ProfileInfo />
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
