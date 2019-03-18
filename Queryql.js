const Express = require("express");
const BodyParser = require("body-parser");
const MongoClient = require("mongodb").MongoClient;
const ObjectID = require("mongodb").ObjectID;
const DENZEL_IMDB_ID = 'nm0000243';
const imdb = require('./src/imdb');
var {graphql, buildSchema } = require('graphql');

const URL= 'mongodb+srv://FlorentBiss:Floby.hokcey1002@cluster0-nitmr.mongodb.net/test?retryWrites=true';
const DATABASE="AwesomeFilms";

var app=Express();

app.use(BodyParser.json());
app.use(BodyParser.urlencoded({extended:true}));