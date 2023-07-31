'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('RaceUserBookMarks', {
      raceUserBookMarkId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
        field:"raceUserBookMarkId"
      },
      raceUserBookMarkName: {
        type: Sequelize.STRING
      },
      raceUserBookMarkStatus: {
        type: Sequelize.INTEGER
      },
      bookMarkAt: {
        type: Sequelize.DATE
      },
    
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('RaceUserBookMarks');
  }
};