'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class RaceFinishStories extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  RaceFinishStories.init({
    blogLink: DataTypes.STRING,
    raceId: DataTypes.INTEGER,
    raceFinishedStoriesStatus: DataTypes.INTEGER,
    raceFinishedStoriesId: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        field: 'raceFinishedStoriesId'
      }
  }, {
    sequelize,
    modelName: 'RaceFinishStories',
  });
  return RaceFinishStories;
};