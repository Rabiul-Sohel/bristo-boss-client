import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle";
import axios from "axios";
import MenuCard from "../MenuCard/MenuCard";
import MenuCategory from "../MenuCategory/MenuCategory";
import useMenu from "../../../hooks/useMenu";


const PopularMenu = () => {
    const [menu] = useMenu()
    console.log(menu);
    const popular = menu.filter(item => item.category === 'popular')
    
    
    // const [menu, setMenu] = useState([])
    // useEffect(()=>{
    //   axios.get('menu.json')
    //     .then(res => {
    //         const popularItem = res.data.filter(singleMenu => singleMenu.category === 'popular')
    //         setMenu(popularItem);
    //     })  
    // },[])
    return (
        <section className="my-10 text-center max-w-6xl mx-auto">
            <SectionTitle
            heading="From Our Menu"
            subHeading="Check it out"
            ></SectionTitle>
            <MenuCategory 
            items={popular}
            buttonText="View Full Menu"
            ></MenuCategory>
            {/* <div className="grid md:grid-cols-2 gap-10 mb-10">
                {
                    menu.map(item => <MenuCard
                    key={item._id}
                        item={item}
                    ></MenuCard>)
                }
            </div>
            <button className="btn btn-outline border-0 border-b-4 ">View Full Menu</button> */}
        </section>
    );
};

export default PopularMenu;