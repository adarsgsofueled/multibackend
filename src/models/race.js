'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Race extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Race.init({
    raceName: DataTypes.STRING,
    raceType: DataTypes.STRING,
    isFeatured: DataTypes.BOOLEAN,
    eventSlug: DataTypes.STRING,
    raceCity: DataTypes.INTEGER,
    raceRatings: DataTypes.INTEGER,
    raceStatus: DataTypes.INTEGER,
    raceComments: DataTypes.STRING,
    yoskaProgramLink: DataTypes.STRING,
    raceWebsite: DataTypes.STRING,
    raceRegistrationLink: DataTypes.STRING,
    raceId: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        field: 'raceId'
      }
  }, {
    sequelize,
    modelName: 'Race',
  });
  return Race;
};