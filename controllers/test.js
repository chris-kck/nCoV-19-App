// Script For downloading online content to disk

const fs = require('fs');
const request = require('request');
var download = function(uri, filename, callback){
    request.head(uri, function(err, res, body){
        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
    });
};

for (let i = 1; i < 15; i++) {
    download('https://sacoronavirus.co.za/wp-content/uploads/2020/03/Coronavirus-Myths-and-Facts-post-' + i + '-800x800.jpg', '../public/images/fact' + i + '.jpg', function () {
    })
};
