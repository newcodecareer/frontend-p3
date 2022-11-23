// import Banner from "../components/Banner/Banner";
import BannerModified from "../components/BannerModified/BannerModified";
import PostNeed from "../components/PostNeeds/PostNeed";
import JoinUs from "../components/JoinUs/JoinUs";
import { HomeMain } from "./Homepage.styles";
import Categories from "../components/Categories/Categories";
import NewFooter from "../components/Footer/NewFooter";

const Homepage = () => {
  // window.location.reload(false);
  return (
    <HomeMain>
      {/* <Banner /> */}
      <BannerModified />
      <PostNeed />
      <Categories />
      <JoinUs />
      <NewFooter />
    </HomeMain>
  );
};

export default Homepage;
