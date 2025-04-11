import express from "express";
import dotenv from "dotenv";
import {DBconnection} from "./database/Database.js";
import cors from "cors";
import { authRoutes } from "./Routes/authRoutes.js";


dotenv.config();
DBconnection();



const app = express();
const PORT = process.env.PORT;

//MIDDLEWARES
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(
  cors({
    origin : ['https://ecommerce-bharatgo.vercel.app'],
    methods : ['GET','POST','PUT','DELETE'],
    credentials : true
  }))

//ROUTES
//auth routes
app.use('/api/v1/auth', authRoutes );



app.listen(PORT, () => {
  console.log(`SERVER RUNNING ON PORT ${PORT}`);
});
