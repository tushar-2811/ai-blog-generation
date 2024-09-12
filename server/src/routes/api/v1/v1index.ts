import {Router} from 'express'
import userRouter from './user.route'


const v1Router:Router = Router();

v1Router.use('/user' , userRouter);


export default v1Router;