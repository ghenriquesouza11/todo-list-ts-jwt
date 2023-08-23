import jwt from 'jsonwebtoken';
import 'dotenv/config';

const secret = process.env.JWT_SECRET || 'secretkey';

type payload = {
    id: number,
    email: string,
};

const sign = (payload: payload): string => {
  const token = jwt.sign(payload, secret);

  return token;
};

export = {
  sign,
};
