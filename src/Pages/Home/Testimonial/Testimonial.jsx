import SectionTitle from "../../../components/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import { useEffect, useState } from "react";
import axios from "axios";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'
// import { FaQuoteLeft } from "react-icons/fa";
import { FaQuoteLeft } from "react-icons/fa6";

const Testimonial = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/reviews").then((res) => setReviews(res.data));
  }, []);
  return (
    <section className="my-20">
      <SectionTitle
        heading="Testimonials"
        subHeading="What Our Clients Say"
      ></SectionTitle>
      <Swiper
        pagination={{
          type: "progressbar",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper my-10"
      >
        {reviews.map((review) => (
          <SwiperSlide className="text-center " key={review._id}>
            <Rating className="mx-auto mt-10" style={{ maxWidth: 180 }} value={review.rating} readOnly />
            <FaQuoteLeft className="text-center text-6xl mx-auto my-5" />
            <p className="max-w-4xl mx-auto text-center"> {review.details} </p>
            <h3 className="mt-5 text-orange-400 text-3xl"> {review.name} </h3>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonial;
