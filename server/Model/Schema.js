import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    id:{
        type:String,
        require:true,
        unique:true,
    },
    url:String,
    detailedUrl : String,
    title:Object,
    price:Object,
    quantity:Number,
    description : String,
    discount : String,
    tagLine : String,
});

const Product = mongoose.model('product',productSchema);

export default Product;