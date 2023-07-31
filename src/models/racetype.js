'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class RaceType extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  RaceType.init({
    raceTypeName: DataTypes.STRING,
    raceTypeStatus: DataTypes.INTEGER,
    raceTypeId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      field: 'raceTypeId'
    }
  }, {
    sequelize,
    modelName: 'RaceType',
  });
  return RaceType;
};