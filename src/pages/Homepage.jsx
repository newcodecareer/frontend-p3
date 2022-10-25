import React from "react";

import Banner from "../components/Banner/Banner";
import PostNeed from "../components/PostNeeds/PostNeed";
import Footer from "../components/Footer/Footer";
import { HomeMain } from "./Homepage.styles";
import Categories from "../components/Categories/Categories";

const Homepage = () => {
  return (
    <HomeMain>
      <Banner />
      <PostNeed />
      <Categories />
      <Footer />
    </HomeMain>
  );
};

export default Homepage;
