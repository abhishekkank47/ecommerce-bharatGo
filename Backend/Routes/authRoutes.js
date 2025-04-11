import experss from "express";
import { registerController, loginController } from "../controllers/authControllers.js";
import { isAdmin, requiredSignIn } from "../Middlewares/authMiddeleware.js";

export const authRoutes = experss.Router();

//REGISTER ROUTE
authRoutes.post('/register', registerController )

//LOGIN ROUTE
authRoutes.post('/login', loginController )

//FOR PROTECTED ROUTE
authRoutes.get('/user-auth' , requiredSignIn, (req, res )=>{
    res.status(200).send(
        {
            ok : true
        }
    )
})

//ADMIN DASHBOARD PROTECTED ROUTE
authRoutes.get('/admin-auth' , requiredSignIn, isAdmin, (req, res )=>{
    res.status(200).send(
        {
            ok : true
        }
    )
})