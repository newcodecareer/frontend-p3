import React from "react";
import Banner from "../components/Banner/Banner";
import PostNeed from "../components/PostNeeds/PostNeed";
import Footer from "../components/Footer/Footer";
import { HomeMain } from "./Homepage.styles";

const Homepage = () => {
  return (

   
    <HomeMain>
      <Banner />
      <PostNeed />
      <Footer />
    </HomeMain>
  );
};

export default Homepage;
