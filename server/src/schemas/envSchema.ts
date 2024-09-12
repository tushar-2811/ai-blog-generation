import {z} from 'zod'

export const envConfigSchema = z.object({
    PORT : z.coerce.number().positive().max(65536).default(3000),
    MONGODB_URL : z.string({
        description : "Mongodb connection string",
        required_error : "db connection string is required"
    }),
   
})