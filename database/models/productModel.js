import mongoose from "mongoose";
//Define schema
const productSchema = new mongoose.Schema({
  name: String,
  quantity: Number,
  description: String,
  category: String,
  isAvailable: Boolean,
});
//create Model
const Product = mongoose.model("Product", productSchema);

export default Product;



// route
// controller 
// database operation

