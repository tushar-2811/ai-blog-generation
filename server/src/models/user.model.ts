import mongoose,{Schema} from 'mongoose'
import { User } from './models.type'

const userSchema:Schema<User> = new mongoose.Schema({
    email : {
        type : String,
        required : true,
        unique : true
    },
    name : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    },
    refreshToken : {
        type : String
    }

} , {timestamps : true})

const UserModel = mongoose.models.User as mongoose.Model<User> || mongoose.model<User>("User",userSchema);

export default UserModel;