import { Router } from "express";
import  personRouter  from "./personRouter";

const router: Router = Router();

router.use("/user",personRouter);



export default router;
