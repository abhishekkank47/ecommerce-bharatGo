import mongoose from "mongoose";
import validator from "validator";

const userSchema = new mongoose.Schema({

    fullName : {
        type : String,
        required : true,
        trim : true,
        minLength : [3,"FULL NAME CONTAIN AT LEAST 3 CHARECTERS"]
    },
    phone : {
        type : String,
        required : true,
        trim : true,
        minLength : [10,"PHONE NUMBER MUST CONTAIN AT LEAST 10 DIGITS"],
        maxLength : [10,"PHONE NUMBER MUST CONTAIN AT LEAST 10 DIGITS"]
    },
    email : {
        type : String,
        required : true,
        trim : true,
        validate : [validator.isEmail,'PLEASE PROVIDE VALID EMAIL']
    },
    address : {
        type : String,
        required : true,
        trim : true,
    },
    pin : {
        type : String,
        required : true,
        trim : true
    },
    password : {
        type : String,
        required : true,
        trim : true,
        minLength : [8,'PASSWORD MUST CONTAIN MORE THAN 8 CHARECTERS']
    },
    confirmPassword : {
        type : String,
        required : true,
        trim : true,
        minLength : [8,'PASSWORD MUST CONTAIN MORE THAN 8 CHARECTERS']
    },
    role : {
        type : Number,
        required : true,
        default : 0
    },
},{timestamps:true})

export const userModel = new mongoose.model("user", userSchema)