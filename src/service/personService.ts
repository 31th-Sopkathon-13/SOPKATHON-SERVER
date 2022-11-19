import { PersonCreateDto } from './../interface/PersonCreateDto';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const createPerson = async (
  personCreateDto: PersonCreateDto,
  userId: number,
) => {
  const data = await prisma.person.create({
    data: {
      user_id: userId,
      name: personCreateDto.name,
      birth: personCreateDto.birth,
      mbti: personCreateDto.mbti,
      memo: personCreateDto.memo,
      value: personCreateDto.value,
    },
  });

  return data;
};

const getPersonById = async (personId: number) => {
  const data = prisma.person.findUnique({
    where: {
      id: personId,
    },
  });

  return data;
};

const updatePerson = async (personId: number, isActive: boolean) => {
  const data = await prisma.person.update({
    where: {
      id: personId,
    },
    data: {
      is_active: isActive,
    },
  });

  return data;
};

const personService = {
  createPerson,
  getPersonById,
  updatePerson,
};

export default personService;
