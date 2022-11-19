import exp from 'constants';
import { Router } from 'express';
import { personController } from '../controller';

const personRouter : Router = Router();

personRouter.post("/",);

personRouter.get("/:personId",);

personRouter.get("/main", );

personRouter.patch("/:personId",);


export default personRouter;