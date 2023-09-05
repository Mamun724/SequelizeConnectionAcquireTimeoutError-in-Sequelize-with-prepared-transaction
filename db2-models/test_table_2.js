const db2 = require("../db-connections/db2");
const { Sequelize } = require("sequelize");

const db1Connection = db2.connection;

const test_table_2 = db1Connection.define(
    'test_table_2',
    {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        last_name: Sequelize.STRING
    },
    {
        timestamps: false,
        tableName: 'test_table_2'
    }
);

module.exports = {
    test_table_2
};
