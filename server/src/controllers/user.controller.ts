import {Request , Response} from 'express'
import {signUpSchema} from '../schemas/signupSchema'
import UserModel from '../models/user.model'



export const signInController = async(req: Request , res:Response) => {
    
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

        const newUser = await UserModel.create({
            email , name , password
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