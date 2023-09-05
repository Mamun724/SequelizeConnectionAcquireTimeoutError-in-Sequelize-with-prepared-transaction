const { Sequelize } = require("sequelize");
const { db1Env } = require("../db-config");

module.exports = {
    connection: new Sequelize({
        ...db1Env
    })
};
