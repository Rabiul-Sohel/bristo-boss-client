import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Swal from "sweetalert2";
import useAxios from "../hooks/useAxiosSecure";
import useCart from "../hooks/useCart";
import useAxiosSecure from "../hooks/useAxiosSecure";

const FoodCard = ({ item }) => {
  const { name, image, price, recipe, _id } = item;
  const priceInInt = parseFloat(price)
  const {user} = useAuth()
  const navigate = useNavigate()
  const location = useLocation()
  const axiosSecure = useAxiosSecure()
  const [, refetch] = useCart()

  const handleAddToCart = (food) => {
   
    if(user || user?.email){
      // ToDO: do something
      console.log(food);
      const cartItem = {
        menuId: _id,
        customer: user.email,
        name, 
        image,
        price: priceInInt

      }
      axiosSecure.post('/carts', cartItem)
        .then(res => {
          console.log(res);
          if(res.data.insertedId){
            refetch()
            Swal.fire({
              position: "top-end",
              icon: "success",
              title:  `${name} Added to the Cart`,
              showConfirmButton: false,
              timer: 1500
            });
          }
        })
    } else {
      Swal.fire({
        title: "Are you want add to cart?",
        text: "Please Login!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login!"
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/login',{state: {from: location}})
        }
      });
    }
  };

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt={name} />
      </figure>
      <p className="absolute right-5 top-2 bg-slate-800 text-white py-2 px-4 ">
        {" "}
        ${price}{" "}
      </p>
      <div className="card-body">
        <h2 className="card-title"> {name} </h2>
        <p> {recipe} </p>
        <div className="card-actions  ">
          <button
            onClick={() => handleAddToCart(item)}
            className=" bg-gray-300 px-4 py-2 rounded-lg hover:bg-slate-900 border-b-4 border-orange-500 text-orange-500 uppercase  mx-auto"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
