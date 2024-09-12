import {Request , Response} from 'express'
import {signUpSchema} from '../schemas/signupSchema'
import UserModel from '../models/user.model'
import { signInSchema } from '../schemas/signinSchema';
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { JWT_SECRET } from '../constants';



export const signInController = async(req: Request , res:Response) => {
      try {
        const {email , password} = req.body;
        const parsedInput = signInSchema.safeParse({email , password});

        if(!parsedInput.success){
            return res.status(401).json({
                ok : false,
                message : "invalid credentials",
                error : parsedInput.error
            })
        }

        // check if email exist or not
        const isUserExist = await UserModel.findOne({email});
        console.log(isUserExist?.password);

        if(!isUserExist || !isUserExist.password){
            return res.status(401).json({
                ok : false,
                message : "user not found",
            })
        }
       
        const isPasswordCorrect = bcrypt.compare(password , isUserExist.password);

        if(!isPasswordCorrect){
            return res.status(401).json({
                ok : false,
                message : "password is wrong",
            })
        }

        const User = await UserModel.findById(isUserExist._id).select("-password");

        const token = jwt.sign({_id : isUserExist._id} , JWT_SECRET , {expiresIn : "24h"});
         
        return res.status(200).json({
            ok : true,
            message : "successful sign in",
           data : {
             user : User,
             token : token
           }
        })

        
      } catch (error) {
        console.log("error while sign in" , error);
        return res.status(500).json({
            ok : false,
            message : "error while sign in",
            error : error
        })
      }
}

export const signUpController = async(req: Request , res:Response) => {
    try {
        const {email , name , password} = req.body;
        const parsedInput = signUpSchema.safeParse({
            email , name , password
        });

        if(!parsedInput.success){
            return res.status(401).json({
                ok : false,
                message : "invalid credentials",
                error : parsedInput.error
            })
        }

        const existingUser = await UserModel.findOne({email});

        if(existingUser){
            return res.status(401).json({
                ok : false,
                message : "user already exist"
            })
        }

        const hashedPassword = await bcrypt.hash(password , 10);

        const newUser = await UserModel.create({
            email , name , password : hashedPassword
        })

        const newCreatedUser = await UserModel.findById(newUser._id).select("-password -refreshToken")

        return res.status(200).json({
            ok : true,
            message : "Account created successfully",
            data : {
                user : newCreatedUser,
            }
        })


     } catch (error) {
         return res.status(500).json({
            ok : false,
            message :"Error while registering user",
            error : error
         })
     }
}



export const findUsersController = async(req:Request , res:Response) => {
    try {
        const filter = req.query.filter || "";

        const allUsersWithFilter = await UserModel.find({
            $or : [{
                 email :   {
                    "$regex" : filter
                }
            },
            {
                name : {
                    "$regex" : filter
                }
            }
            ]
        }).select("-password -refreshToken");

        return res.status(201).json({
            ok : true,
            message : "request successfull",
            data : allUsersWithFilter
        })

        
    } catch (error) {
        console.log("error while finding users" , error);
        return res.status(501).json({
            ok : false,
            message : "failed to search users",
            errro : error 
        })
    }
}