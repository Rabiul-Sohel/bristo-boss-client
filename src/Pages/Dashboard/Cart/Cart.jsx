import { FaDeleteLeft } from "react-icons/fa6";
import SectionTitle from "../../../components/SectionTitle";
import useCart from "../../../hooks/useCart";
import { FaRecycle, FaTrashAlt } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import useAxios from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Link } from "react-router-dom";

const Cart = () => {
  const [cart, refetch, isLoading] = useCart();
  const axiosSecure = useAxiosSecure();
  
  const totalPrice = (cart?.reduce((sum, item) => sum + item.price, 0))
  // const newTotalPrice = totalPrice.toFixed(2)
  const amount = Math.round(totalPrice * 100) /100
  console.log(cart);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/carts/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
            refetch();
          }
        });
      }
    });
  };

  if (isLoading) {
    return <div className="text-5xl">Loading</div>;
  }
  return (
    <div>
      <SectionTitle
        heading={"Wanna Add More?"}
        subHeading={"My Cart"}
      ></SectionTitle>
      <div className="bg-white p-10">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold uppercase">
            Total Orders: {cart?.length}{" "}
          </h2>
          <h2 className="text-2xl font-bold uppercase">
            Total Price: ${amount}{" "}
          </h2>
          {
            cart?.length > 0 ? <Link state={amount} to='/dashboard/payment'>
            <button className="btn bg-orange-300 border-none text-white">
              Pay
            </button>
          </Link>: <button disabled className="btn bg-orange-300 border-none text-white">
              Pay
            </button>
          }
        </div>
        <div className="overflow-x-auto">
          <table className="table mt-5">
            {/* head */}
            <thead className="bg-orange-300   text-black rounded-t-xl">
              <tr>
                <th></th>
                <th>Item Image</th>
                <th>Item Name</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {cart?.map((item, idx) => (
                <tr key={idx}>
                  <th> {idx + 1} </th>
                  <td>
                    <img className="w-16" src={item.image} alt="" />
                  </td>
                  <td>{item.name}</td>
                  <td> ${item.price} </td>
                  <td>
                    <button
                      onClick={() => handleDelete(item._id)}
                      className="text-center w-12 h-12 rounded-lg text-white bg-red-700"
                    >
                      {" "}
                      <FaTrashAlt className="text-xl mx-auto"></FaTrashAlt>{" "}
                    </button>
                  </td>
                </tr>
              ))}
              {/* row 1 */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Cart;
