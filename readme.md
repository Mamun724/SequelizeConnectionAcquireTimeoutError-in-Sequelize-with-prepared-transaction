# PostgreSQL prepared transation with Sequelize demo

## Commands to run before `npm start`
Please update the `.env` file with proper database URLs.

Then run:
1. `npm install`
2. `npm run sequelize:db1:migrate`
3. `npm run sequelize:db2:migrate`

After running the app by `npm start`, it stops working after inserting first 5 data objects.
After that it gets the `SequelizeConnectionAcquireTimeoutError`.

When you have found the error, please go to the database dashboard of the first database in PG Admin 4 and you will
see all the 5 allowed connections are taken by some PIDs. Now search the executable for the PIDs and you
will find that they are PostgreSQL processes.