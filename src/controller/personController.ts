import { fail, success } from './../constants/response';
import { PersonCreateDto } from './../interface/PersonCreateDto';
import { Response, Request } from "express";
import { personService } from "../service";
import { statusCode } from '../constants';
import message from '../constants/responseMessage';

const createPerson = async(req : Request, res : Response)=>{
    const { userId } = req.params;
    const personCreateDto : PersonCreateDto = req.body;

    try{
        const createdPerson = await personService.createPerson(personCreateDto, +userId);

        if (!createdPerson){
            return res.status(statusCode.BAD_REQUEST).send(fail(statusCode.BAD_REQUEST,message.BAD_REQUEST));
        }
        return res.status(statusCode.CREATED).send(success(statusCode.CREATED, message.CREATE_PERSON_SUCCESS));
    }catch(error){
        console.log(error);
        return res.status(statusCode.INTERNAL_SERVER_ERROR).send(fail(statusCode.INTERNAL_SERVER_ERROR,message.INTERNAL_SERVER_ERROR));
    }


}


const getPersonById = async(req : Request, res : Response)=>{
    const {personId } = req.params;
    

    if(!personId){
        return res.status(statusCode.BAD_REQUEST).send(fail(statusCode.BAD_REQUEST,message.BAD_REQUEST));
    }

    try{
        const data = await personService.getPersonById(+personId);

        if(!data){
            return res.status(statusCode.NO_CONTENT).send(success(statusCode.NO_CONTENT,message.NO_CONTENT));
        }

        return res.status(statusCode.OK).send(success(statusCode.OK,"인물 조회 성공", data));
    }
    catch(error){
        console.log(error);
        return res.status(statusCode.INTERNAL_SERVER_ERROR).send(fail(statusCode.INTERNAL_SERVER_ERROR,message.INTERNAL_SERVER_ERROR));

    }    
}

const personController={
    createPerson,
    getPersonById
}

export default personController;