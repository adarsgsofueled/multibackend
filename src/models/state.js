'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class State extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  State.init({
    stateName: DataTypes.STRING,
    countryId: DataTypes.INTEGER,
    stateStatus: DataTypes.INTEGER,
    stateId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      field: 'stateId'
    }
  }, {
    sequelize,
    modelName: 'State',
  });
  return State;
};