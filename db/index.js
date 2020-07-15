/*                db.js -- Database object configuration                  */
/*           verbose = long stack traces, for development only            */

//Load modules
var UserModel = require('./usermodel');
var RssModel = require('./rssmodel');
var Sequelize = require('sequelize');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './db/sql.sqlite'
});

//db.tutorials = require("./tutorial.model.js")(sequelize, Sequelize);
const User = UserModel( sequelize, Sequelize);
const Rss = RssModel( sequelize, Sequelize);

const db = {};
db.Sequelize= Sequelize;
db.sequelize = sequelize;
db.User = User;
db.Rss = Rss;

//db.sequelize.sync(); drop each time the app restarts
db.sequelize.sync({ force: true }).then(() => {
    console.log("Drop and re-sync db.");
});

/* DB Operations

//Perform SELECT Operation

//Perform INSERT operation.

//Perform DELETE operation

//Perform UPDATE operation

*/

module.exports = db;