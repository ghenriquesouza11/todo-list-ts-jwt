import { Request, Response } from 'express';
import userServices from '../services/user.services';

const createUser = async (req: Request, res: Response): Promise<Response> => {
  const userInfo = req.body;

  const {status, data} = await userServices.createUser(userInfo);

  return res.status(status).json(data);
};

export = {
  createUser,
}