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
  let arr1 = [];
  let arr2 = [];
  let arr3 = [];
  let arrayData = [];
  for (let i = 0; i < 3; i++) {
    const { name, value } = data[i];
    arr1.push({ name, value });
  }
  for (let i = 3; i < 6; i++) {
    const { name, value } = data[i];
    arr2.push({ name, value });
  }
  for (let i = 6; i < 8; i++) {
    const { name, value } = data[i];
    arr3.push({ name, value });
  }
  arrayData.push(arr1, arr2, arr3);
  return arrayData;
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
