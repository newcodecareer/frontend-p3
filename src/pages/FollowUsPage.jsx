import React from "react";
// import FollowUs from "../components/FollowUs/FollowUs";
import { FollowUsPageCss } from "./FollowUsPage.style";
import ContactUs from "../components/ContactUs/ContactUs";
import NewFooter from "../components/Footer/NewFooter";
const FollowUsPage = () => {
  return (
    <FollowUsPageCss>
      {/* <FollowUs /> */}
      <ContactUs/>
      <NewFooter/>
    </FollowUsPageCss>
  );
};

export default FollowUsPage;
