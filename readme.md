# PostgreSQL prepared transation with Sequelize demo
After running the app by `npm start`, it stops working after inserting first 5 data.
After that it gets the `SequelizeConnectionAcquireTimeoutError`.

When you have found the error, please go to the database dashboard of the first database in PG Admin 4 and you will
see all the 5 allowed connections are taken by some PIDs. Now search the executable for the PIDs and you
will find that they are PostgreSQL processes.
