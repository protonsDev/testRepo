import express from 'express';
import {connectDB} from './database/db.js';
const app = express();
import "dotenv/config"
import UserRoutes from "./routes/user.js";
import ProductRoute from "./routes/product.js"

app.use(express.json());

app.use("/api/user",UserRoutes);
app.use("/api/product",ProductRoute);



connectDB();

app.listen(process.env.SERVER_PORT,()=>{
    console.log(`Server is running ${process.env.SERVER_PORT}`);
});

