import express, {Express} from 'express'
import IndexRouter from './routes'
import cors from 'cors'
import cookieParser from 'cookie-parser'

const app: Express = express();

// middlewares

app.use(cors({
    origin : "*",
    credentials : true
}));

app.use(express.json());

app.use(cookieParser());


app.use('/' , IndexRouter);

export default app;