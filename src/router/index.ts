import { Router } from "express";
import  personRouter  from "./personRouter";

const router: Router = Router();

router.use("/person",personRouter);



export default router;
