import mongoose from "mongoose";

export const DBconnection = async() =>{
    try {
        const connectDb = await mongoose.connect(process.env.MONGODB_URI)
        console.log(`DATABSE CONNECTED SUCCSEFULLY`)
    } catch (error) {
        console.log(`ERROR IN DATABASE CONNECTION:${error}`)
    }
}
