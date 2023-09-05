const { Sequelize } = require("sequelize");
const { db2Env } = require("../db-config");

module.exports = {
    connection: new Sequelize({ ...db2Env })
};
