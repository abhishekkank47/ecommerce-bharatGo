import { hashing, comparing } from "../Helper/PasswordHash.js";
import { userModel } from "../Models/userModel.js";
import JWT from "jsonwebtoken"

//REGISTER CONTROLLER
export const registerController = async (req, res) => {
  try {

    const { fullName, phone, email, address, pin, password, confirmPassword } = req.body;

    //VALIDATION
    if ( !fullName || !phone || !email || !address || !pin || !password || !confirmPassword ) 
        {
           return res.status(400).send({
                success: false,
                message: "ALL FEILDS ARE REQUIRED TO FILLED",
            });
        }

    //CONFIRM PASSWORD MATCH CHECK
    if (password !== confirmPassword) {
        return res.status(400).send({
          success: false,
          message: "PASSWORDS DO NOT MATCH, PLEASE RE-ENTER",
        });
      }

    //CHECK USER
    const userExist = await userModel.findOne({email})

    //EXISTING USER
    if (userExist) {
     return res.status(200).send(
        { 
            success: false, 
            message: "EMAIL IS ALREADY REGISTERED, PLEASE LOGIN TO CONTINUE" 
        });
    }

    //PASSWORD HASH
    const hashedPassword = await hashing( password )

    //SAVING DATA AS NEW USER IN DATABASE
    const user = new userModel({fullName, phone, email, address, pin, password:hashedPassword, confirmPassword:hashedPassword}).save();
    res.status(201).send(
        {
            success: true,
            message:'USER REGISTERED SUCCESFULLY',
            user : { fullName,email,phone,address,pin}
        }
    )

  } catch (error) {
    console.log(`ERROR IN REGISTRATION : ${error}`);
    res.status(500).send({
      success: false,
      message: "ERROR IN REGISTRATION",
    });
  }
};

//LOGIN CONTROLLER
export const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;

    //VALIDATION
    if( !email || !password ){
      return res.status(400).send(
        {
          success : false,
          message : 'ALL FEILDS ARE REQUIRED'
        }
      )
    }

    //FIND USER
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(404).send({
        success: false,
        message: "USER NOT FOUND",
      });
    }

    //REGISTER PASSWORD == LOGIN PASSWORD ?
    const isMatch = await comparing(password, user.password);
    if (!isMatch) {
      return res.status(400).send({
        success: false,
        message: "INVALID CREDENTIALS",
      });
    }

    //TOKEN
    const token = await JWT.sign({_id:user._id}, process.env.JWT_SECRETE, {expiresIn : process.env.JWT_EXPIRES} )


    //REFRESH TOKEN
    const refreshToken = await JWT.sign({_id:user._id}, process.env.JWT_SECRETE, {expiresIn : process.env.JWT_REFRESH_EXPIRES} )

    //LOGIN SUCCESS
    res.status(200).send({
      success: true,
      message: "LOGIN SUCCESSFUL",
      user : 
        {
          fullName : user.fullName,
          email : user.email,
          phone : user.phone,
          address : user.address,
          role : user.role 
        },token, refreshToken
      });

  } catch (error) {
    console.log(`ERROR IN LOGIN : ${error}`);
    res.status(404).send({
      success: false,
      message: "ERROR IN LOGIN",
    });
  }
};
