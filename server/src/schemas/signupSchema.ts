import {z} from 'zod'

export const signUpSchema = z.object({
    email : z.string().email(),
    name : z.string().min(3 , "Name must be of atleast 3 characters")
                      .max(20 , "Name must not be of more than 20 characters"),
    password : z.string().min(5 , "Password must contain alteast 5 characters")   
})