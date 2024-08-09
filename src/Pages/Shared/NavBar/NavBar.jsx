import { NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import Swal from "sweetalert2";
import { FaShoppingCart } from "react-icons/fa";
import useCart from "../../../hooks/useCart";

const NavBar = () => {
  const { user, signOutUser } = useAuth();
  const [cart] = useCart();
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
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/menu">Our Menu</NavLink>
      </li>
      <li>
        <NavLink to="/shop/salad">Our Shop</NavLink>
      </li>
      <li>
        <NavLink to="/secret">Secret</NavLink>
      </li>
     
        <li>
          <NavLink to='/dashboard/cart' className="btn">
            <FaShoppingCart />
            <div className="badge badge-secondary">
              {
                cart? cart?.length : 0
              }
            </div>
          </NavLink>
        </li>
      
    </>
  );
  return (
    <div className="">
      <div className="navbar bg-black bg-opacity-30 fixed z-10 text-white">
        <div className="navbar-start">
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
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navOptions}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">Bistro Boss</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navOptions}</ul>
        </div>
        <div className="navbar-end">
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
                      user.photoURL ? user.photoURL :"https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                    }
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
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
