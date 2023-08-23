import { User } from '../../types/User.type';
import db from './index';
import { DataTypes, Optional, ModelDefined } from 'sequelize';

export type UserInpputableFields = Optional<User, 'id'>

type UserModelCreator = ModelDefined<User, UserInpputableFields>

const UserModel: UserModelCreator = db.define('User', {
  name: DataTypes.STRING,
  email: DataTypes.STRING,
  password: DataTypes.STRING,
  created_at: {
    type: DataTypes.DATE,
    defaultValue: new Date(),
  },   
},
{
  timestamps: false,
  tableName: 'Users'
}
);

export default UserModel;
