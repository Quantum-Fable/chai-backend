import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
    try {
       const connectInstancet = await mongoose.connect(`${process.env.
        MONGODB_URL}/${DB_NAME}`)
        console.log(`\n MongoDB connected !! DB HOST: $
            {connectionInstance.connection.host}`);
    } catch(error) {
       console.log("MONGODB coonection error", error);
       process.exit(1)
    }
}


export default connectDB