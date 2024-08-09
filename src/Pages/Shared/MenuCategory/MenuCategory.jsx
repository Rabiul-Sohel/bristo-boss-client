import axios from "axios";
import { useEffect, useState } from "react";
import MenuCard from "../MenuCard/MenuCard";
import useMenu from "../../../hooks/useMenu";
import { Link } from "react-router-dom";

const MenuCategory = ({ items, buttonText, category }) => {
//   const [menu, setMenu] = useState([]);
//   useEffect(() => {
//     axios.get("menu.json").then((res) => {
//       const uniqueCategory = res.data.filter(
//         (singleMenu) => singleMenu.category === category
//       );
//       setMenu(uniqueCategory);
//     });
//   }, [category]);

  return (
    <div className=" my-10">
      <div className="grid md:grid-cols-2 gap-10 my-10 max-w-6xl mx-auto">
        {items.map((item) => (
          <MenuCard key={item._id} item={item}></MenuCard>
        ))}
      </div>
      <div className="flex justify-center">
        {category ? <Link to={`/shop/${category}`}>
        <button  className="btn btn-outline border-0 border-b-4 uppercase">
          {buttonText}
        </button></Link> : <Link to='/menu'>
        <button  className="btn btn-outline border-0 border-b-4 uppercase">
          {buttonText}
        </button></Link>}
      </div>
    </div>
  );
};

export default MenuCategory;
