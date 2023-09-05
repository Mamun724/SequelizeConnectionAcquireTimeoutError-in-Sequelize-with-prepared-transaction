require('dotenv').config();
const url = require('url');

const db1Url = url.parse(process.env.DATABASE1_URL);
const db2Url = url.parse(process.env.DATABASE2_URL);

module.exports = {
    db1Env: {
        "username": db1Url.auth.substring(0, db1Url.auth.indexOf(':')),
        "password": db1Url.auth.substring(db1Url.auth.indexOf(':') + 1, db1Url.auth.length),
        "database": db1Url.path.slice(1),
        "host": db1Url.hostname,
        "port": db1Url.port,
        "dialect": "postgres",
        "ssl": false,
        "protocol": db1Url.protocol.substring(0, db1Url.protocol.length - 1),
        "dialectOptions": {
            "ssl": false
        }
    },
    db2Env: {
        "username": db2Url.auth.substring(0, db2Url.auth.indexOf(':')),
        "password": db2Url.auth.substring(db2Url.auth.indexOf(':') + 1, db2Url.auth.length),
        "database": db2Url.path.slice(1),
        "host": db2Url.hostname,
        "port": db2Url.port,
        "dialect": "postgres",
        "ssl": false,
        "protocol": db2Url.protocol.substring(0, db2Url.protocol.length - 1),
        "dialectOptions": {
            "ssl": false
        }
    }
};
