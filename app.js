const express = require('express');
const path = require("path");
const app = express()

app.use('/assets', express.static(__dirname + '/assets'));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(3000, () => console.log('Listening on port 3000!'))