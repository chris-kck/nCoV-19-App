/*                db.js -- Database object configuration                  */
/*           verbose = long stack traces, for development only            */

//Load modules
var UserModel = require('./usermodel');
var RssModel = require('./rssmodel');
var SACaseModel = require('./sacasemodel');
var WorldCaseModel = require('./worldcasemodel');
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
const WorldCase = WorldCaseModel( sequelize, Sequelize);

const db = {};
db.Sequelize= Sequelize;
db.sequelize = sequelize;
db.User = User;
db.Rss = Rss;
db.SACase = SACase;
db.WorldCase = WorldCase;

//db.sequelize.sync();
//drop each time the app restarts
SACase.sync({ force: true}).then(() => {
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
    //Time delay to allow db to process data.
    var end = Date.now() + 10000
    while (Date.now() < end) ;
});



//https://covid19.who.int/WHO-COVID-19-global-data.csv
//Store data in db?

function insertdata1(data){

    let wcases = db.sequelize.query('INSERT INTO "WorldCases" (`Date_reported`, `Country_code` , `Country`, `WHO_region`, `New_cases`, `Cumulative_cases`, `New_deaths`, `Cumulative_deaths`, `createdAt`, `updatedAt`)    VALUES (:Date_reported, :Country_code, :Country, :WHO_region, :New_cases, :Cumulative_cases, :New_deaths, :Cumulative_deaths, DATE("now"), DATE("now"))', {
        replacements: {Date_reported: data.Date_reported , Country_code:data.Country_code,  Country:data.Country, WHO_region:data.WHO_region, New_cases:data.New_cases, Cumulative_cases:data.Cumulative_cases, New_deaths:data.New_deaths, Cumulative_deaths:data.Cumulative_deaths },
        type: db.sequelize.QueryTypes.INSERT
    });

    console.log("Worlddata ran");
}


request('https://covid19.who.int/WHO-COVID-19-global-data.csv', {json: false}, (err, res, body) => {
    if (err) {
        return console.log(err);
    }

    var who = papaparse.parse(body, {
        download: false,
        header:true,
        delimiter: ",",
        dynamicTyping: true,
        transformHeader:function(h) { //trim who data header with leading whitespace
            return h.trim();
        },
        step: function (row) {

            if (row.data.Date_reported != null)
                //insertdata1(row.data);
                console.log(row.data);
            // call insert with each row.
        }
    })

    var end = Date.now() + 10000
    while (Date.now() < end) ;
});






module.exports = db;