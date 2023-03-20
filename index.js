var http = require('http');
const GUN = require('gun');
http.createServer(function (req, res) {
    console.log(`Just got a request at ${req.url}!`)
    res.write('Yo, this is me!');
    res.end();
}).listen(process.env.PORT || 3000);
