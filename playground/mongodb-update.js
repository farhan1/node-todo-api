// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to mongoDB server');
  }
  console.log('Connected to MongoDB server');

  var todos = db.collection("Todos");
  var users = db.collection("Users");

  // findOneAndUpdate
  // todos.findOneAndUpdate({
  //   _id: new ObjectID('59f1065b9ba7805fceb92531')
  // }, {
  //     $set: {
  //       completed: true
  //     },
  //   }, {
  //     returnOriginal: false
  //   }).then((result) => {
  //   console.log(result);
  // });

  users.findOneAndUpdate({
    _id: new ObjectID('59f0f8d57c49f81519a1c7e0')
  }, {
    $set: {
      name: "Farhanaa"
    },
    $inc: {
      age: 1
    }
  }, {
    updateOriginal: false
  }).then((result) => {
    console.log(result);
  });

  //db.close();
});
