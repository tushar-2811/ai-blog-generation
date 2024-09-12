import { Router } from "express";
import apiRouter from "./api/apiIndex";

const IndexRouter:Router = Router();

IndexRouter.use('/api' , apiRouter);

export default IndexRouter;