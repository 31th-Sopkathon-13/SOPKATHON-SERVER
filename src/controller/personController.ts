import { PersonUpdateDto } from './../interface/PersonUpdateDto';
import { fail, success } from './../constants/response';
import { PersonCreateDto } from './../interface/PersonCreateDto';
import { Response, Request } from 'express';
import { personService } from '../service';
import { statusCode } from '../constants';
import message from '../constants/responseMessage';

const createPerson = async (req: Request, res: Response) => {
  const { userId } = req.params;
  const personCreateDto: PersonCreateDto = req.body;

  try {
    const createdPerson = await personService.createPerson(
      personCreateDto,
      +userId,
    );

    if (!createdPerson) {
      return res
        .status(statusCode.BAD_REQUEST)
        .send(fail(statusCode.BAD_REQUEST, message.BAD_REQUEST));
    }
    return res
      .status(statusCode.CREATED)
      .send(success(statusCode.CREATED, message.CREATE_PERSON_SUCCESS));
  } catch (error) {
    console.log(error);
    return res
      .status(statusCode.INTERNAL_SERVER_ERROR)
      .send(
        fail(statusCode.INTERNAL_SERVER_ERROR, message.INTERNAL_SERVER_ERROR),
      );
  }
};

const getPersonById = async (req: Request, res: Response) => {
  const { personId } = req.params;

  if (!personId) {
    return res
      .status(statusCode.BAD_REQUEST)
      .send(fail(statusCode.BAD_REQUEST, message.BAD_REQUEST));
  }

  try {
    const data = await personService.getPersonById(+personId);

    if (!data) {
      return res
        .status(statusCode.NO_CONTENT)
        .send(success(statusCode.NO_CONTENT, message.NO_CONTENT));
    }

    return res
      .status(statusCode.OK)
      .send(success(statusCode.OK, '인물 조회 성공', data));
  } catch (error) {
    console.log(error);
    return res
      .status(statusCode.INTERNAL_SERVER_ERROR)
      .send(
        fail(statusCode.INTERNAL_SERVER_ERROR, message.INTERNAL_SERVER_ERROR),
      );
  }
};

/**
 * GET /api/person/:userId
 */
const getPersonByValue = async (req: Request, res: Response) => {
  const { userId } = req.params;
  try {
    const data = await personService.getPersonByValue(+userId);
    return res
      .status(statusCode.OK)
      .send(success(statusCode.OK, message.READ_PEOPLE_SUCCESS, data));
  } catch (error) {
    console.log(error);
    return res
      .status(statusCode.INTERNAL_SERVER_ERROR)
      .send(
        fail(statusCode.INTERNAL_SERVER_ERROR, message.INTERNAL_SERVER_ERROR),
      );
  }
};

const updatePerson = async (req: Request, res: Response) => {
  const { personId } = req.params;
  const personUpdateDto: PersonUpdateDto = req.body;

  try {
    const data = await personService.updatePerson(+personId, personUpdateDto);
    return res
      .status(statusCode.OK)
      .send(success(statusCode.OK, message.UPDATE_PERSON_SUCCESS, data));
  } catch (error) {
    console.log(error);
    return res
      .status(statusCode.INTERNAL_SERVER_ERROR)
      .send(
        fail(statusCode.INTERNAL_SERVER_ERROR, message.INTERNAL_SERVER_ERROR),
      );
  }
};

//   if (isActive === undefined) {
//     return res
//       .status(statusCode.BAD_REQUEST)
//       .send(fail(statusCode.BAD_REQUEST, message.INTERNAL_SERVER_ERROR));
//   }

//   try {
//     let updatedPerson;

//     if (isActive.toLowerCase() === 'true') {
//       updatedPerson = await personService.updatePerson(+personId, true);
//     } else if (isActive.toLowerCase() === 'false') {
//       updatedPerson = await personService.updatePerson(+personId, false);
//     } else {
//       return res
//         .status(statusCode.BAD_REQUEST)
//         .send(fail(statusCode.BAD_REQUEST, message.INTERNAL_SERVER_ERROR));
//     }

//     if (!updatedPerson) {
//       return res
//         .status(statusCode.NO_CONTENT)
//         .send(success(statusCode.NO_CONTENT, message.NO_CONTENT));
//     } else {
//       return res
//         .status(statusCode.OK)
//         .send(success(statusCode.OK, '성공', updatedPerson));
//     }
//   } catch (error) {
//     console.log(error);
//     return res
//       .status(statusCode.INTERNAL_SERVER_ERROR)
//       .send(
//         fail(statusCode.INTERNAL_SERVER_ERROR, message.INTERNAL_SERVER_ERROR),
//       );
//   }
// };

const personController = {
  createPerson,
  getPersonById,
  getPersonByValue,
  updatePerson,
};

export default personController;
