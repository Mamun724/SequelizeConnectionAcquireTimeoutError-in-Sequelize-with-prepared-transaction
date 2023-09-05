
require('dotenv').config();
const crypto = require("crypto");

const { test_table_1 } = require('./db1-models/test_table_1');
const { test_table_2 } = require('./db2-models/test_table_2');
const db1 = require('./db-connections/db1');
const db2 = require('./db-connections/db2');

const usersToInsert = [];

for (let i = 1; i <= 10; i++) {
    usersToInsert.push({
        first_name: `first_name of user${i}`,
        last_name: `last_name of user${i}`
    });
}

async function insertUser(user) {
    console.log('inserting user: ', user);

    // sequelize1 & sequelize2 are two different sequelize instances, connected to different databases.
    const sequelize1 = db1.connection;
    const sequelize2 = db2.connection;

    const id = crypto.randomUUID();
    let firstTransactionPrepared = false;

    const transaction1 = await sequelize1.transaction(); // In Sequelize 7, this method is called unmanagedTransaction()
    try {
        const transaction2 = await sequelize2.transaction();

        //Start of actual task to do
        try {
            await test_table_1.create(
                {
                    first_name: user.first_name
                },
                {
                    transaction: transaction1
                }
            );

            await test_table_2.create(
                {
                    last_name: user.last_name
                },
                {
                    transaction: transaction2
                }
            );
            //End of actual task to do

            // Prepare & commit
            await sequelize1.query('PREPARE TRANSACTION :id', {
                replacements: { id },
                transaction: transaction1,
            });
            firstTransactionPrepared = true;

            await transaction2.commit();

            await sequelize1.query('COMMIT PREPARED :id', {
                replacements: { id },
                transaction: transaction1,
            });
        } catch (error) {
            await transaction2.rollback();
            throw error;
        }
    } catch (error) {
        if (firstTransactionPrepared) {
            await sequelize1.query('ROLLBACK PREPARED :id', {
                replacements: { id },
                transaction: transaction1,
            });
        } else {
            await transaction1.rollback();
        }

        throw error;
    }
}

async function verifyInsert() {
    console.log(await test_table_1.findAll());
    console.log(await test_table_2.findAll());
}

async function main() {
    for (let user of usersToInsert) {
        try {
            await insertUser(user);
        } catch (err) {
            console.log(err);
        }
    }
    await verifyInsert();
};

main();