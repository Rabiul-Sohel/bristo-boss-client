import Cover from "../Shared/Cover/Cover";
import shopCover from "../../assets/shop/shop-cover.jpg";
import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../../hooks/useMenu";
import OrderTab from "./OrderTab/OrderTab";
import { useParams } from "react-router-dom";
import './shop.css'

const OurShop = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [isTab, setIsTab] = useState(false)
  
  const [menu] = useMenu();
    const {category} = useParams()
    // const categories = ['salad', 'pizza', 'dessert', 'drink', 'soup']
    // const categoryIndex = categories.indexOf(category)
    const handleSelectedIndex = () =>{
        if(category === 'salad'){
            return 0
        } else if(category === 'pizza'){
            return 1
        }else if(category === 'dessert'){
            return 2
        }else if(category === 'drinks'){
            return 3
        } else if(category === 'soup'){
            return 4
        } else {
            return 0
        }
    }
  const desserts = menu.filter((item) => item.category === "dessert");
  const pizza = menu.filter((item) => item.category === "pizza");
  const salads = menu.filter((item) => item.category === "salad");
  const soups = menu.filter((item) => item.category === "soup");
  const drinks = menu.filter((item) => item.category === "drinks");
  return (
    <div>
      <Cover
        img={shopCover}
        title="Our Shop"
        description="Would you like to try a dish?"
      ></Cover>
      <div className="max-w-6xl mx-auto">
        <Tabs
          className=" my-10"
          selectedIndex={isTab ? tabIndex : handleSelectedIndex()}
          onSelect={(index) => {
            setIsTab(true)
            setTabIndex(index)
            
        }}
        >
          <TabList dir="" className="mb-10 text-center">
            <Tab selectedClassName={"bg-none text-[#BB8506]"}>Salads</Tab>
            <Tab selectedClassName={"bg-none text-[#BB8506]"}>Pizza</Tab>
            <Tab selectedClassName={"bg-none text-[#BB8506]"}>Desserts</Tab>
            <Tab selectedClassName={"bg-none text-[#BB8506]"}>Drinks</Tab>
            <Tab selectedClassName={"bg-none text-[#BB8506]"}>Soups</Tab>
          </TabList>
          <TabPanel>
            {/*salad  */}
            <OrderTab category={salads}></OrderTab>
          </TabPanel>
          <TabPanel>
            {/* pizzs */}
            <OrderTab category={pizza}></OrderTab>
          </TabPanel>
          <TabPanel>
            {/* desserts  */}
            <OrderTab category={desserts}></OrderTab>
          </TabPanel>
          <TabPanel>
            {/* drinks  */}
            <OrderTab category={drinks}></OrderTab>
          </TabPanel>
          <TabPanel>
            {/* Soups  */}
            <OrderTab category={soups}></OrderTab>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default OurShop;
