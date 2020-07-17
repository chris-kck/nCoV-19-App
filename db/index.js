/*                db.js -- Database object configuration                  */
/*           verbose = long stack traces, for development only            */

//Load modules
var UserModel = require('./usermodel');
var RssModel = require('./rssmodel');
var SACaseModel = require('./sacasemodel');
var Sequelize = require('sequelize');
var request = require('request');
var papaparse = require('papaparse');



const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './db/sql.sqlite'
});

//db.tutorials = require("./tutorial.model.js")(sequelize, Sequelize);
const User = UserModel( sequelize, Sequelize);
const Rss = RssModel( sequelize, Sequelize);
const SACase = SACaseModel( sequelize, Sequelize);

const db = {};
db.Sequelize= Sequelize;
db.sequelize = sequelize;
db.User = User;
db.Rss = Rss;
db.SACase = SACase;

//db.sequelize.sync();
//drop each time the app restarts
db.sequelize.sync({ force: true }).then(() => {
    console.log("Drop and re-sync db.");
});

//Insert Latest CSV DATA into DB function accepts row object with keys.
    function insertdata(data){

        let cases = db.sequelize.query('INSERT INTO "SACases" (`date`, `date1`, `EC`, `FS`, `GP`, `KZN`, `LP`, `MP`, `NC`, `NW`, `WC`, `UNKNOWN`, `total`, `source`, `createdAt`, `updatedAt`)    VALUES (:date, :date, :EC, :FS, :GP, :KZN, :LP, :MP, :NC, :NW, :WC, :UNKNOWN, :total, :source, DATE("now"), DATE("now"))', {
            replacements: {date: data.date , date1:data.date,  EC:data.EC, FS:data.FS, GP:data.GP, KZN:data.KZN, LP:data.LP, MP:data.MP, NC:data.NC, NW:data.NW, WC:data.WC, UNKNOWN:data.UNKNOWN, total:data.total, source:data.source },
            type: db.sequelize.QueryTypes.INSERT
        });

        console.log("Getdata ran");
    }



/*
papaparse.parse("https://raw.githubusercontent.com/dsfsi/covid19za/master/data/covid19za_provincial_cumulative_timeline_confirmed.csv", {
    download: false,
    //header:true,
    delimiter: ",",
    dynamicTyping: true,
    step: function(row) {
        console.log("Row:", row.data);
    },
    complete: function(results) {
        console.log(results);
    }
});


 */

request('https://raw.githubusercontent.com/dsfsi/covid19za/master/data/covid19za_provincial_cumulative_timeline_confirmed.csv', {json: false}, (err, res, body) => {
    if (err) {
        return console.log(err);
    }

    var k = papaparse.parse(body, {
        download: false,
        header:true,
        delimiter: ",",
        dynamicTyping: true,
        step: function (row) {
            console.log(row.data);
            if (row.data.date != null)
            insertdata(row.data);
            // call insert with each row.
        }
    })

    console.log("Done Done Done")
});

module.exports = db;