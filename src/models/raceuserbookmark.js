'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class RaceUserBookMark extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  RaceUserBookMark.init({
    raceUserBookMarkName: DataTypes.STRING,
    raceUserBookMarkStatus: DataTypes.INTEGER,
    bookMarkAt: DataTypes.DATE,
    raceUserBookMarkId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      field: 'raceUserBookMarkId'
    }
  }, {
    sequelize,
    modelName: 'RaceUserBookMark',
  });
  return RaceUserBookMark;
};