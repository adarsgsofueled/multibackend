'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Userfirebaseotp extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Userfirebaseotp.init({
    mobilenumber: DataTypes.STRING,
    verificationcode: DataTypes.STRING,
    issuccessfull: DataTypes.BOOLEAN,
    attempttime: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Userfirebaseotp',
  });
  return Userfirebaseotp;
};