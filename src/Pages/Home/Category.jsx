import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
// import "./styles.css";
import { Pagination } from "swiper/modules";
import slide1 from "../../assets/home/slide1.jpg";
import slide2 from "../../assets/home/slide2.jpg";
import slide3 from "../../assets/home/slide3.jpg";
import slide4 from "../../assets/home/slide4.jpg";
import slide5 from "../../assets/home/slide5.jpg";
import SectionTitle from "../../components/SectionTitle";

const Category = () => {
  return (
    <section className="my-10">
      <SectionTitle
        subHeading={"From 10.00am to 10.00pm"}
        heading={"Order Online"}
      ></SectionTitle>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper max-w-4xl"
      >
        <SwiperSlide>
          <img src={slide1} alt="" />
          <p className="text-center text-2xl text-white -mt-12">Salad</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2} alt="" />
          <p className="text-center text-2xl text-white -mt-12">Pizzas</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide3} alt="" />
          <p className="text-center text-2xl text-white -mt-12">Soup</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide4} alt="" />
          <p className="text-center text-2xl text-white -mt-12">Dessert</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide5} alt="" />
          {/* <p className="text-center text-2xl text-white -mt-20">Salad</p> */}
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Category;
