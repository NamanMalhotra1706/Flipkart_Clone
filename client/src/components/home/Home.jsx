import NavBar from "./NavBar";
import Banner from "./Banner";
import { Fragment } from "react";
import { Box, styled } from "@mui/material";
import { useEffect } from "react";
import { getProducts } from "../../redux/actions/productAction";
import { useDispatch, useSelector } from 'react-redux';
import Slide from "./Slide";
import MidSlide from "./midSlide";
import MidSection from "./midSection";

const Component = styled(Box)`
    padding: 5px 10px;
    background-color:#F2F2F2;
`;

export default function Home() {

 const { products } =  useSelector(state=>state.getProducts);
   console.log(products);
const dispatch = useDispatch();


useEffect(()=>{
    dispatch(getProducts());
  },[dispatch]);

  return (
    <Fragment>
      <NavBar />
      <Component>
        <Banner />
        <MidSlide products={products} title="Deal of the Day" timer={true}  />
        <MidSection />
        <Slide products={products} title="Trending Offers" timer={false} />
        <Slide products={products} title="Discounts" />
        <Slide products={products} title="Footwear" />
        <Slide products={products} title="KitchenWear" />
        <Slide products={products} title="Babyware" />
        <Slide products={products} title="Top Deal on Accessories" />
        <Slide products={products} title="Buy 2 Get One Free" timer={true} />
      </Component>
    </Fragment>
  );
}
