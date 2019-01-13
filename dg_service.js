/**
 *  Dilen Govin
 * 
 *  File: dg_service.js
 *  This page implements the service logic for delivering and receiving content
 *  for personal website.
 * 
 *  Updates:
 *      1/12/19: Created service to serve info to public/index.html
 */

const express = require('express');
const port = process.env.PORT || 3000

var app = express();

app.get('/', function (req, res) {
    res.send(JSON.stringify({ Hello: 'World'}));
});

app.listen(port, function () {
    console.log(`Example app listening on port !`);
});