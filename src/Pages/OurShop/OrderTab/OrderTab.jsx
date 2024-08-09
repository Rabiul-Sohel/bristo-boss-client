import FoodCard from "../../../components/FoodCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from 'swiper/modules';
import "swiper/css";
import "swiper/css/pagination";

const OrderTab = ({ category }) => {
  const items = category?.length;
  console.log(items);
  const itemsPerPage = 6;
  const pagesAmount = Math.ceil(items / itemsPerPage)
  var currentPage = 1;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage
  
 let pages = [1, 2];
 for(let i = 1; i <= pagesAmount; i++){
  pages.push[i]
  console.log(pages);
 }
 console.log(pages);
 
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + '</span>';
    },
  };
  return (
    <div>

      <Swiper
        pagination={pagination}
        modules={[Pagination]}
        className="mySwiper"
      >

        {/* <div>
          {
            category.map(item => <SwiperSlide key={item._id}>
              <FoodCard item={item}></FoodCard>
            </SwiperSlide>)
          }
        </div> */}
        <SwiperSlide>
        <div className=" grid lg:grid-cols-3 gap-5">
          {category.slice(startIndex, endIndex).map((item) => (
            <FoodCard key={item._id} item={item}></FoodCard>
          ))}
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className=" grid lg:grid-cols-3 gap-5">
          {category.slice(startIndex, endIndex).map((item) => (
            <FoodCard key={item._id} item={item}></FoodCard>
          ))}
          </div>
        </SwiperSlide>
       
       
      </Swiper>
    </div>
  );
};

export default OrderTab;
