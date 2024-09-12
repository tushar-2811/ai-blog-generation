import {Request , Response , NextFunction} from 'express'
import jwt , {JwtPayload} from 'jsonwebtoken'
import {JWT_SECRET} from '../constants'

export const authMiddleware = async(req: Request , res: Response , next: NextFunction) => {
     const authHeader = req.headers.authorization;
     
     if(!authHeader || !authHeader.startsWith("Bearer ")){
        return res.status(403).json({
            ok : false,
            message : "Token is not Valid"
        })
     }

     const token = authHeader.split(' ')[1];
    
     try {
        const decodedData = jwt.verify(token , JWT_SECRET) as JwtPayload ;

        if(decodedData.userId){
             req.headers["user"] = decodedData.userId;
             next();

        }else{
            return res.status(403).json({
                ok : false,
                message : "user not authenticated"
            })
        }
     } catch (error) {
        console.log("error in middleware" , error);     
        return res.status(403).json({
            ok : false,
            message : "Error while validating auth",
            error : error
        })
    }
}