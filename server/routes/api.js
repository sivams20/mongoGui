var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('../db/mongoose');
var {User} = require('../model/user');

var app = express();