import UserModel, { UserInpputableFields } from '../database/models/User.model';
import * as bcrypt from 'bcrypt';
import jwtUtils = require('../utils/jwt.utils');

type userServiceResponse = {
    status: number,
    data: string,
};

const createUser = async (userInfo: UserInpputableFields): Promise<userServiceResponse> => {
  const {name, email, password} = userInfo;

  const salt: string = await bcrypt.genSalt(10);

  const hashedPassword: string = await bcrypt.hash(password, salt); 

  const createdUser = (await UserModel.create({name, email, password: hashedPassword})).toJSON();

  const payload = {
    id: createdUser.id,
    email: createdUser.email,
  };

  const token = jwtUtils.sign(payload);

  return {status: 201, data: token};
};

export = {
  createUser,
};
