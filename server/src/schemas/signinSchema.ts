import {z} from 'zod'

export const signIpSchema = z.object({
    email : z.string().email(),
    password : z.string().min(5 , "Password must contain alteast 5 characters")   
})