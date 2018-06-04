/* eslint-disable */
const path = require('path');
const fs = require('fs');
const express = require('express');

const app = express();

const indexPath = path.join(__dirname, 'static/index.html');
const publicPath = express.static('static');

app.use('/', publicPath);
app.get('/*', (req, res) => res.sendFile(indexPath));

const port = process.env.PORT || 3000;

app.listen(port);
console.log(`Listening at http://localhost:${port}`);
