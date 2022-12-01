import _ from 'lodash';
import { PersonCreateDto } from './../interface/PersonCreateDto';
import { PrismaClient } from '@prisma/client';
import { PersonUpdateDto } from '../interface/PersonUpdateDto';
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

const getPersonByValue = async (userId: number) => {
  const data = await prisma.person.findMany({
    where: {
      user_id: userId,
    },
    orderBy: {
      value: 'asc',
    },
  });
  return data;
};

const updatePerson = async (
  personId: number,
  personUpdateDto: PersonUpdateDto,
) => {
  const data = await prisma.person.update({
    where: {
      id: personId,
    },
    data: {
      ...personUpdateDto,
    },
  });

  return data;
};

const personService = {
  createPerson,
  getPersonById,
  getPersonByValue,
  updatePerson,
};

export default personService;
