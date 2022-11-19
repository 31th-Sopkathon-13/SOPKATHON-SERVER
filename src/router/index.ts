import { Router } from "express";
import  personRouter  from "./personRouter";
import userRouter from "./userRouter";

const router: Router = Router();

router.use("/person",personRouter);

router.use("/user",userRouter);



export default router;
