import { success } from './../constants/response';
import { Response, Request } from 'express';
import { message, statusCode } from '../constants';
import { fail } from '../constants/response';
import { userService } from '../service';

const createUser = async (req: Request, res: Response) => {
  const { userName } = req.body;

  if (!userName) {
    res
      .status(statusCode.BAD_REQUEST)
      .send(fail(statusCode.BAD_REQUEST, message.BAD_REQUEST));
  }

  try {
    const createdUser = await userService.createUser(userName);

    if (!createdUser) {
      return res
        .status(statusCode.BAD_REQUEST)
        .send(fail(statusCode.BAD_REQUEST, message.BAD_REQUEST));
    }

    return res
      .status(statusCode.CREATED)
      .send(
        success(statusCode.CREATED, message.CREATE_USER_SUCCESS, createdUser),
      );
  } catch (error) {
    console.log(error);
    return res
      .status(statusCode.INTERNAL_SERVER_ERROR)
      .send(
        fail(statusCode.INTERNAL_SERVER_ERROR, message.INTERNAL_SERVER_ERROR),
      );
  }
};

const userController = {
  createUser,
};

export default userController;
