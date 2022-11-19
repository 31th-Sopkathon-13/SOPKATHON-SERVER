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
    
}

const personController={
    createPerson,
    getPersonById
}

export default personController;