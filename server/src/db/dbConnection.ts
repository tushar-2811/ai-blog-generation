import mongoose from 'mongoose'
import { DB_NAME } from '../constants'
import { env } from '../config/envConfig';

const connectDB = async() => {
    try {
         const connectionInstance = await mongoose.connect(`${env.MONGODB_URL}${DB_NAME}`);
         console.log(`\n Connected to database :: host : ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log("Error while connecting to db" , error);
        process.exit(1);
    }
}

export default connectDB;