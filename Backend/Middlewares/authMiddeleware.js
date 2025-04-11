import JWT from "jsonwebtoken";
import {userModel} from "../Models/userModel.js"

//IT IS USED FOR PROTECTION TO ROUTES
export const requiredSignIn = async (req, res, next) => {
  try {
    const decode = JWT.verify(req.headers.authorization, process.env.JWT_SECRETE);
    req.user = decode;
    next();
  } catch (error) {
    console.log(error)
  }
};


//IS ADMIN OR NOT (AUTHORIZATION CHECK)
export const isAdmin = async (req, res, next ) => {
  try {
    const user = await userModel.findById(req.user._id)

    //VALIDATION
    if ( user.role !== 1){
      return res.status(401).send(
        {
          success : false,
          message : "UNAUTHORISED ACCESS"
        }
      )
    } else { next() } 
    
  } catch (error) {
    console.log(`ERROR IN ADMIN MIDDLEWRE : ${error}`) 
  }
}