// require Sequelize
var Sequelize = require('sequelize');

// setup the mysql connection information
var source = {
            jaws: {
                port: 3306,
                host: 'bqmayq5x95g1sgr9.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
                user: 'p875z3aywjbt3hc0',
                password: 'kvyfxpffnsw66v48',
                database: 'jwzkbqyywmy0cu3o'
            },
            jeremiah: {
                port: 8889,
                host: 'localhost',
                user: 'root',
                password: 'root',
                database: 'jeremiah'
            }
        };

var db = source.jeremiah;

// connect to the database and log the error or connect as ID
var sequelize = new Sequelize(db.database, db.user, db.password, {
  host: db.host,
  port: db.port,
  dialect: 'mysql',
  define: {
    timestamps: false
  }
});

// export the connection variable for accessing mysql database info
module.exports = sequelize;