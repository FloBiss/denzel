const Express = require("express");
const BodyParser = require("body-parser");
const MongoClient = require("mongodb").MongoClient;
const ObjectID = require("mongodb").ObjectID;

const URL= 'mongodb+srv://FlorentBiss:Floby.hokcey1002@cluster0-nitmr.mongodb.net/test?retryWrites=true';
const DATABASE="AwesomeFilms";

var app=Express();

app.use(BodyParser.json());
app.use(BodyParser.urlencoded({extended:true}));

var database,collection;

app.listen(3000,() => {
	MongoClient.connect(URL, {useNewUrlParser: true}, (error,client) => {
		if(error){
			throw error;
		}
		database=client.db(DATABASE);
		collection=database.collection("Films");
		console.log("Connected to`" + DATABASE + "`!");
	});
});

app.get("/movies", (request, response) => {
	collection.find({"metascore": {$gte: 70}}).toArray((error,result) => {
		if(error) {
			return response.status(500).send(error);
		}
		response.send(result[Math.floor(Math.random() * result.length)]);
	});
});

app.get("/movies/:id", (request,response) => {
	collection.findOne({"id": request.params.id }, (error,result) => {
		if(error) {
			return response.status(500).send(error);
		}
		response.send(result);
	});
});