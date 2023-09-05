const db1 = require("../db-connections/db1");
const { Sequelize } = require("sequelize");

const db1Connection = db1.connection;

const test_table_1 = db1Connection.define(
    'test_table_1',
    {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        first_name: Sequelize.STRING
    },
    {
        timestamps: false,
        tableName: 'test_table_1'
    }
);

module.exports = {
    test_table_1
};
