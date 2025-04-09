import { addProductInDB } from "../service/productService.js";

const addProduct = async (req,res) =>{
  try{
    const data = req.body;
    await addProductInDB(data);
    
    res.status(200).json({data:data,message:"Product saved in db successfully"});


  }catch(error){
    res.send(error);
  }
}


