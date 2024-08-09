import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import NavBar from "../Pages/Shared/NavBar/NavBar";

const MainLayout = () => {
  const location = useLocation()
  const navFooterOff = location.pathname === '/login' || location.pathname.includes('signUp') ||location.pathname.includes('form') || location.pathname.includes('file')
  // console.log(navFooterOff);
  return (
    <div>
      {navFooterOff || <NavBar></NavBar>}
      <Outlet></Outlet>
      {navFooterOff || <Footer></Footer>}
    </div>
  );
};

export default MainLayout;
