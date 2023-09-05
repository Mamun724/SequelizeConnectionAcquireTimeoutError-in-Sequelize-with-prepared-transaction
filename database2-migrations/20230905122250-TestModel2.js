'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(
      'test_table_2',
      {
        id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true,
          allowNull: false
        },
        last_name: Sequelize.STRING
      }
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('test_table_2');
  }
};
