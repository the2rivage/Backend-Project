import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async ()=>{
    try{
       // storing the response given by mongoose.connect
       const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)   
       console.log(`\n MongoDB connected ! DB HOST : ${connectionInstance.connection.host}`);
        
    }catch(error){
      console.log("MONGODB connection ERROR ",error);
      process.exit(1)
    }
}
export default connectDB;