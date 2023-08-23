import UserModel, { UserInpputableFields } from '../database/models/User.model';
import { User } from '../types/User.type';

type userServiceResponse = {
    status: 200,
    data: User,
};

const createUser = async (userInfo: UserInpputableFields): Promise<userServiceResponse> => {
  const {name, email, password} = userInfo;

  const createdUser = (await UserModel.create({name, email, password})).toJSON();

  return {status: 200, data: createdUser};
};

export = {
  createUser,
};
