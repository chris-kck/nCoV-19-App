/*                db.js -- Database object configuration                  */
/*           verbose = long stack traces, for development only            */

//Load modules
//var sqlite3 = require('sqlite3').verbose();
//var db = new sqlite3.Database('sql.sqlite');
var UserModel = require('./usermodel');
var RssModel = require('./rssmodel');
var Sequelize = require('sequelize');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'sql.sqlite'
});

//db.tutorials = require("./tutorial.model.js")(sequelize, Sequelize);
const User = UserModel( sequelize, Sequelize);
const Rss = RssModel( sequelize, Sequelize);

const db = {};
db.Sequelize= Sequelize;
db.sequelize = sequelize;
db.User = User;
db.Rss = Rss;

/* DB Operations

//Perform SELECT Operation
db.all("SELECT * from blah blah blah where this="+that,function(err,rows){
//rows contain values while errors, well you can figure out.
});

//Perform INSERT operation.
db.run("INSERT into table_name(col1,col2,col3) VALUES (val1,val2,val3)");

//Perform DELETE operation
db.run("DELETE * from table_name where condition");

//Perform UPDATE operation
db.run("UPDATE table_name where condition");
*/

module.exports = db;