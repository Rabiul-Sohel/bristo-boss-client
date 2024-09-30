import { NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import Swal from "sweetalert2";
import { FaShoppingCart } from "react-icons/fa";
import useCart from "../../../hooks/useCart";
import useAdmin from "../../../hooks/useAdmin";
import '../NavBar/NavStyle.css'
import logo from '../../../assets/logo.png'

const NavBar = () => {
  const { user, signOutUser } = useAuth();
  const [isAdmin] = useAdmin()
  const [cart] = useCart();
  console.log(isAdmin?.admin);
  const handleLogout = () => {
    signOutUser()
      .then(() => {
        console.log("Logout successful");
        localStorage.removeItem('access-token')
        Swal.fire({
          title: "Success",
          text: "LogOut Successful!",
          icon: "success",
        });
      })
      .catch((err) => console.log(err));
  };
  const navOptions = (
    <>
      <li>
        <NavLink className='nav-link' style={({ isPending, isActive }) => {
          return {
            color: isActive ? '#EEFF25' : '',
            background: 'none'

          }
        }} to="/">Home</NavLink>
      </li>
      <li>
        <NavLink className='nav-link' style={({ isPending, isActive }) => {
          return {
            color: isActive ? '#EEFF25' : '',
            background: 'none'

          }
        }} to="/contact">Contact Us</NavLink>
      </li>
      <li>
        <NavLink className='nav-link' style={({ isPending, isActive }) => {
          return {
            color: isActive ? '#EEFF25' : '',
            background: 'none'

          }
        }} to="/menu">Our Menu</NavLink>
      </li>
      <li>
        <NavLink className='nav-link' style={({ isPending, isActive }) => {
          return {
            color: isActive ? '#EEFF25' : '',
            background: 'none'

          }
        }}
          to="/shop/salad">Our Shop</NavLink>
      </li>
      {
        // user ? 'true' : 'false'
        // user ? condition ? 'double true' : 'one true' : 'false'
      }
      {
        user && isAdmin?.admin && <li>
          <NavLink className='nav-link' style={({ isPending, isActive }) => {
            return {
              color: isActive ? '#EEFF25' : '',
              background: 'none'

            }
          }} to="dashboard/adminHome">Admin Dashboard</NavLink>
        </li>
      }

      {
        user && !isAdmin?.admin && <li>
          <NavLink className='nav-link' style={({ isPending, isActive }) => {
            return {
              color: isActive ? '#EEFF25' : '',
              background: 'none'

            }
          }} to="dashboard/userHome">User Dashboard</NavLink>
        </li>
      }

      {
        user && !isAdmin?.admin && <li>
          <NavLink to='/dashboard/cart' className=" bg-green-600 relative rounded-full w-10 h-10">
            <FaShoppingCart className="text-xl -ml-2 " />
            <div className=" bg-red-600 py-1 px-3 mix-blend-overlay  rounded-full  absolute top-6 -right-2  ">
              {
                cart ? cart?.length : 0
              }
            </div>
          </NavLink>
        </li>
      }

    </>
  );
  return (
   
      <div className="navbar text-white bg-black bg-opacity-70  flex items-start justify-between fixed z-30">
        <div className="navbar-start  ">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu uppercase menu-sm bg-black mix-blend-overlay dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52"
            >
              {navOptions}
            </ul>
          </div>
          <div className="absolute top-0 flex items-center justify-center  h-[100px] bg-white overflow-hidden  w-[350px] text-black left-0 logo rounded-none btn btn-ghost pr-10">
            <img className="w-16 mb-7  " src={logo} alt="" />
            <a className=" -ml-2 font-bold text-3xl uppercase">Bistro Boss</a>
          </div>
        </div>
        <div className="flex justify-end w-full gap-3 relative">
          <div className=" hidden lg:flex   ">
            <ul className="menu menu-horizontal bg-transparent bg items-center px-1 uppercase">{navOptions}</ul>
          </div>
          <div className=" ">
            {user ? (
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  <div className="w-10 rounded-full">
                    <img
                      alt="Tailwind CSS Navbar component"
                      src={
                        user.photoURL ? user.photoURL : "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                      }
                    />
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content text-black bg-base-100 rounded-box w-52"
                >
                  <li>
                    <a className="justify-between">
                      Profile
                      <span className="badge">New</span>
                    </a>
                  </li>
                  <li>
                    <a>Settings</a>
                  </li>
                  <li>
                    <button onClick={handleLogout}> Logout </button>
                  </li>
                </ul>
              </div>
            ) : (
              <NavLink to="/login">Login</NavLink>
            )}
          </div>
        </div>
      </div>
    
  );
};

export default NavBar;
