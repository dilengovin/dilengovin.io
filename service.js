/**
 *  Dilen Govin
 * 
 *  File: service.js
 *  This page implements the service logic for delivering and receiving content
 *  for personal website.
 * 
 *  Updates:
 *      1/12/19: Created service to serve info to public/index.html
 */

const express = require('express');
const port = process.env.PORT || 3000

var app = express();

// serve static html files
app.use(express.static('public'));

app.get('/', function (req, res) {
    res.send("Hello World!");
});

app.listen(port, function () {
    console.log(`Example app listening on port ` + port);
});