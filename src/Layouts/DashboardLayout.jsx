import axios from "axios";
import {
  FaAd,
  FaBook,
  FaCalendar,
  FaCalendarAlt,
  FaEnvelope,
  FaHome,
  FaList,
  FaShoppingBag,
  FaUser,
  FaUsers,
  FaUtensils,
  FaWallet,
} from "react-icons/fa";
import { FaCartShopping, FaShop } from "react-icons/fa6";
import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import useCart from "../hooks/useCart";

const DashboardLayout = () => {
  // const isAdmin = true;
  const [isAdmin] = useAdmin()
  const admin = isAdmin?.admin
  const [cart=0] = useCart()
  // console.log(admin);
 

  return (
    <div className="max-w-7xl mx-auto flex ">
      <div className="menu bg-orange-300 text-black min-h-screen w-1/6">
        <div className="flex flex-col items-center my-5">
          <h2 className="text-xl font-bold uppercase">Bistro Boss</h2>
          <p className="tracking-[4px] uppercase font-semibold">Restaurant</p>
        </div>
        {admin ? (
          <div >
            <li>
              {" "}
              <NavLink to="/dashboard/adminHome">
                {" "}
                <FaHome></FaHome> Admin Home{" "}
              </NavLink>{" "}
            </li>
            <li>
              {" "}
              <NavLink to="/dashboard/addItems">
                {" "}
                <FaUtensils></FaUtensils> Add Items{" "}
              </NavLink>{" "}
            </li>
            <li>
              {" "}
              <NavLink to="/dashboard/manageItems">
                {" "}
                <FaList></FaList> Manage Items{" "} 
              </NavLink>{" "}
            </li>
            <li>
              {" "}
              <NavLink to="/dashboard/manageBookings">
                {" "}
                <FaBook></FaBook> Manage Bookings{" "}
              </NavLink>{" "}
            </li>
            <li>
              {" "}
              <NavLink to="/dashboard/allUsers">
                {" "}
                <FaUsers></FaUsers> All Users{" "}
              </NavLink>{" "}
            </li>
          </div>
        ) : (
          <>
            <li>
              {" "}
              <NavLink to="/dashboard/userHome">
                {" "}
                <FaHome></FaHome> User Home{" "}
              </NavLink>{" "}
            </li>
            <li>
              {" "}
              <NavLink to="/dashboard/payment">
                {" "}
                <FaCalendar></FaCalendar> Reservation{" "}
              </NavLink>{" "}
            </li>
            <li>
              {" "}
              <NavLink to="/dashboard/paymentHistory">
                {" "}
                <FaWallet></FaWallet> Payment History{" "}
              </NavLink>{" "}
            </li>
            <li>
              {" "}
              <NavLink to="/dashboard/cart">
                {" "}
                <FaCartShopping></FaCartShopping> {`My Cart (${cart?.length})`}  {" "}
              </NavLink>{" "}
            </li>
            <li>
              {" "}
              <NavLink to="/dashboard/review">
                {" "}
                <FaAd></FaAd> Add Review{" "}
              </NavLink>{" "}
            </li>
            <li>
              {" "}
              <NavLink to="/dashboard/booking">
                {" "}
                <FaCalendarAlt></FaCalendarAlt> Add Review{" "}
              </NavLink>{" "}
            </li>
          </>
        )}

        <div className="divider before:bg-black after:bg-black "></div>
        <li>
          {" "}
          <NavLink to="/">
            {" "}
            <FaHome></FaHome> Home{" "}
          </NavLink>{" "}
        </li>
        <li>
          {" "}
          <NavLink to="/shop/salad">
            {" "}
            <FaShoppingBag></FaShoppingBag> Shop{" "}
          </NavLink>{" "}
        </li>
        <li>
          {" "}
          <NavLink to="/contact">
            {" "}
            <FaEnvelope></FaEnvelope> Contact{" "}
          </NavLink>{" "}
        </li>
      </div>
      <div className="bg-gray-100 w-full px-10  text-black">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default DashboardLayout;
