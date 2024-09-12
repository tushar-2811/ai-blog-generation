import { config } from "dotenv";
import path from 'path'
import { envConfigSchema } from "../schemas/envSchema";

config({
    path : path.join(__dirname,"../../env")
});

export const env = envConfigSchema.parse(process.env);