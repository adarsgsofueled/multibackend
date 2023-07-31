'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Races', {
      raceId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
        field:"raceId"
      },
      raceName: {
        type: Sequelize.STRING
      },
      raceType: {
        type: Sequelize.STRING
      },
      isFeatured: {
        type: Sequelize.BOOLEAN
      },
      eventSlug: {
        type: Sequelize.STRING
      },
      raceCity: {
        type: Sequelize.INTEGER
      },
      raceRatings: {
        type: Sequelize.INTEGER
      },
      raceStatus: {
        type: Sequelize.INTEGER
      },
      raceComments: {
        type: Sequelize.STRING
      },
      yoskaProgramLink: {
        type: Sequelize.STRING
      },
      raceWebsite: {
        type: Sequelize.STRING
      },
      raceRegistrationLink: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('Races');
  }
};