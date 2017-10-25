// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to mongoDB server');
  }
  console.log('Connected to MongoDB server');

  // db.collection('Todos').find({
  //   _id : new ObjectID('59f0f714a4e11014feb42adf')
  // }).toArray().then((docs) => {
  //   console.log("Todos");
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log("Unable to get Todos", err)
  // });

  // db.collection('Todos').find().count().then((count) => {
  //   console.log(`Todos count:${count}`);
  // }, (err) => {
  //   console.log("Unable to get Todos", err)
  // });

  db.collection('Users').find({name:'Farhan'}).toArray().then((docs) => {
    console.log('Todos:');
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err) => {
    console.log('Could not query todo', err);
  });


  //db.close();
});
