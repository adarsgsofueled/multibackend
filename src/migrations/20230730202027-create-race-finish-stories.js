'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('RaceFinishStories', {
      raceFinishedStoriesId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
        field:"raceFinishedStoriesId"
      },
      blogLink: {
        type: Sequelize.STRING
      },
      raceId: {
        type: Sequelize.INTEGER
      },
      raceFinishedStoriesStatus: {
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('RaceFinishStories');
  }
};