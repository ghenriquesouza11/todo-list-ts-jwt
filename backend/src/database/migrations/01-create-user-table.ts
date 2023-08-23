import { QueryInterface, DataTypes, Model } from 'sequelize';
import { User } from '../../types/User.type';

export default {
  up(queryInterface: QueryInterface) {
    return queryInterface.createTable<Model<User>>('Users', {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      }
    });
  },
  down (queryInterface: QueryInterface) {
    return queryInterface.dropTable('Users');
  },
};