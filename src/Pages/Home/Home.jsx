import { Helmet } from "react-helmet-async";
import PopularMenu from "../Shared/PopularMenu/PopularMenu";
import Banner from "./Banner";
import Category from "./Category";
import FeaturedMenu from "./FeaturedMenu/FeaturedMenu";
import Testimonial from "./Testimonial/Testimonial";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Birsto Boss | Home</title>
      </Helmet>
      <Banner></Banner>
      <div className="max-w-6xl mx-auto">
        <Category></Category>
        <PopularMenu></PopularMenu>
        <FeaturedMenu></FeaturedMenu>
        <Testimonial></Testimonial>
      </div>
    </div>
  );
};

export default Home;
