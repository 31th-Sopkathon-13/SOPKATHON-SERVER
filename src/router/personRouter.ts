import { Router } from 'express';
import { personController } from '../controller';

const personRouter: Router = Router();

//인물 생성
personRouter.post('/:userId', personController.createPerson);
//인물 상세조회
personRouter.get('/:personId', personController.getPersonById);
//인물 리스트 조회
personRouter.get('/main/:userId', personController.getPersonByValue);
//인물 정보 수정
personRouter.patch('/:personId', personController.updatePerson);

export default personRouter;
