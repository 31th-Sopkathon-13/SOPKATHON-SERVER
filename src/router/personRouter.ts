import exp from 'constants';
import { Router } from 'express';
import { personController } from '../controller';

const personRouter : Router = Router();

//인물 생성
personRouter.post("/:userId",personController.createPerson);
//인물 상세조회
personRouter.get("/:personId", personController.getPersonById);

personRouter.get("/main", );

personRouter.patch("/:personId",personController.updatePerson);


export default personRouter;