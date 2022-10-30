import React from "react";

// import Banner from "../components/Banner/Banner";
import BannerModified from "../components/BannerModified/BannerModified";
import PostNeed from "../components/PostNeeds/PostNeed";
import JoinUs from "../components/JoinUs/JoinUs"; 
import Footer from "../components/Footer/Footer";
import { HomeMain } from "./Homepage.styles";
import Categories from "../components/Categories/Categories";

const Homepage = () => {
  return (
    <HomeMain>
      {/* <Banner /> */}
      <BannerModified />
      <PostNeed />
      <Categories />
      <JoinUs /> 
      <Footer />
    </HomeMain>
  );
};

export default Homepage;
