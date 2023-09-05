'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(
      'test_table_1',
      {
        id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true,
          allowNull: false
        },
        first_name: Sequelize.STRING
      }
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('test_table_1');
  }
};
