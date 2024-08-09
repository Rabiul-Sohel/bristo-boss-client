import SectionTitle from "../../../components/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg";
import "./feature.css";

const FeaturedMenu = () => {
  return (
    <section className="featured pt-10 relative">
      <div className="bg-black top-0 bg-opacity-50 w-full h-full absolute "></div>
      <div className="relative">
        <SectionTitle
          heading="From Our Menu"
          subHeading="Check it out"
        ></SectionTitle>
        <div className="md:flex justify-center items-center px-24 py-20">
          <img className="w-[450px]" src={featuredImg} alt="" />
          <div className="md:ml-10 text-white w-[450px]">
            <p>March 20, 2023</p>
            <p>WHERE CAN I GET SOME?</p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Molestias voluptas quas doloremque corporis expedita eum
              necessitatibus delectus maiores laudantium modi? Qui explicabo
              aspernatur ipsum culpa voluptates nesciunt architecto ea inventore
              autem nam maiores, deserunt aut facilis dicta hic nisi
              reprehenderit voluptas debitis aliquam cum suscipit nobis
              assumenda. Nihil, dicta nulla.
            </p>
            <button className="btn btn-outline border-0 border-b-4">Order Now</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedMenu;
