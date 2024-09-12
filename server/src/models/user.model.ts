import mongoose,{Schema} from 'mongoose'
import { User } from './models.type'
import bcrypt from 'bcrypt'

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


userSchema.pre("save" , async function(next) {
    if(!this.isModified("password")){
        return next();
    }
    this.password = await bcrypt.hash(this.password , 10);
    next();
})

userSchema.methods.isPasswordCorrect = async function(password : string) {
    return await bcrypt.compare(password , this.password);
}

const UserModel = mongoose.models.User as mongoose.Model<User> || mongoose.model<User>("User",userSchema);

export default UserModel;