import 'dotenv/config';
import { Options } from 'sequelize';

require('dotenv/config');

const config: Options = {
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  host: process.env.DATABASE_HOST,
  dialect: 'mysql',
};

export = config
