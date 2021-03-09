const path = require('path');
const fs = require('fs');
const express = require('express');
const app = express();

app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, '/public')));

app.get('/', (req, res)=>res.render('index', {title: 'Index'}));

app.listen(3000, ()=> console.log("Listening on port 3000"));

//path, fs, express, app
//set view: view engine ejs