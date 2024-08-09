import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import coverImg1 from "../../../assets/menu/banner3.jpg";
import coverImg2 from "../../../assets/menu/dessert-bg.jpeg";
import coverImg3 from "../../../assets/menu/pizza-bg.jpg";
import coverImg4 from "../../../assets/menu/salad-bg.jpg";
import coverImg5 from "../../../assets/menu/soup-bg.jpg";
import MenuCategory from "../../Shared/MenuCategory/MenuCategory";
import SectionTitle from "../../../components/SectionTitle";
import useMenu from "../../../hooks/useMenu";

const MenuLayout = () => {
    const [menu] = useMenu()
    
    const offered = menu.filter(item => item.category === 'offered')
    const desserts = menu.filter(item => item.category === 'dessert')
    const pizza = menu.filter(item => item.category === 'pizza')
    const salads = menu.filter(item => item.category === 'salad')
    const soups = menu.filter(item => item.category === 'soup')
    
   
    return (
        <div>
          <Helmet>
            <title>Birsto Boss | Menu</title>
          </Helmet>
          <Cover
            img={coverImg1}
            title="Our Menu"
            description="Would you like to try a dish?"
          ></Cover>
          <SectionTitle
            heading="Today's Offer"
            subHeading="Don't miss it"
          ></SectionTitle>
          <MenuCategory
            items = {offered}
            category={'offered'}
            buttonText="Order your favourite food"
          ></MenuCategory>
          <Cover
            img={coverImg2}
            title="Desserts"
            description='Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
          ></Cover>
          <MenuCategory
           items ={desserts}
           category={'dessert'}
            buttonText="Order your favourite food"
          ></MenuCategory>
          <Cover
            img={coverImg3}
            title="Pizza"
            description="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          ></Cover>
          <MenuCategory
             items = {pizza}
             category={'pizza'}
            buttonText="Order your favourite food"
          ></MenuCategory>
          <Cover
            img={coverImg4}
            title="Salads"
            description="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          ></Cover>
          <MenuCategory
            items ={salads}
            category={'salad'}
            buttonText="Order your favourite food"
          ></MenuCategory>
          <Cover
            img={coverImg5}
            title="Soups"
            description="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          ></Cover>
          <MenuCategory
            items={soups}
            category={'soup'}
            buttonText="Order your favourite food"
          ></MenuCategory>
        </div>
      );
 
};

export default MenuLayout;
