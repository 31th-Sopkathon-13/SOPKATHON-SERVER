import { PersonCreateDto } from './../interface/PersonCreateDto';
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()



const createPerson = async(personCreateDto : PersonCreateDto, userId : number)=>{
    const data = await prisma.person.create({
        data:{
            user_id : userId,
            name : personCreateDto.name,
            birth : personCreateDto.birth,
            mbti : personCreateDto.mbti,
            memo : personCreateDto.memo,
            value : personCreateDto.value

        }
    });
    


    return data;
}

const getPersonById = async()=>{
    
}



const personService={
    createPerson,
    getPersonById
}

export default personService;