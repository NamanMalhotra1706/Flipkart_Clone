import Product from "./Model/Schema.js";
import { products } from "./constant/product.js";

const DefaultData = async() =>{
    try{
    //    await Product.deleteMany();
       await Product.insertMany(products);
      console.log("Prodcuts Added to DataBase")
    }catch(err){
        console.log("Error While Inserting Data : ",err.message);
    }
}

export default DefaultData;