const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const http = require('http');

var { mongoose } = require('./server/db/mongoose');
var { User } = require('./server/model/user');
var { Todo } = require('./server/model/todo');

//parsers
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//api location
//app.use('/api', api);

app.post('/todos', (req, res)=> {
    console.log(req.body);
});

//angular dist output folder
app.use(express.static(path.join(__dirname, 'dist')));

//send all other request to the angular app
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});

//set port
const port = process.env.PORT || '3030';
app.set('port', port);

const server = http.createServer(app);

server.listen(port, () => console.log(`Running on localhost : ${port}`));