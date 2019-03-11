
/* eslint-disable no-console, no-process-exit */
const imdb = require('./src/imdb');
const DENZEL_IMDB_ID = 'nm0000243';
const MongoClient=require('mongodb').MongoClient;
const uri = 'mongodb+srv://FlorentBiss:Floby.hokcey1002@cluster0-nitmr.mongodb.net/test?retryWrites=true';


async function sandbox (actor) {
  try {
    const movies = await imdb(actor);
    const client = await MongoClient.connect(uri, {
		useNewUrlParser : true
	});
    const collection = client.db("AwesomeFilms").collection("Films");
	//perform actionon the collection object
	collection.insertMany(movies)
	client.close();
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
}

sandbox(DENZEL_IMDB_ID);
