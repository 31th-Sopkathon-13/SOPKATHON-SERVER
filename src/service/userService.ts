import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const createUser = async(userName : string)=>{
    const data = await prisma.user.create({
        data : {
            name : userName
        }
    });

    return data;
}

const userService={
    createUser
}

export default userService;