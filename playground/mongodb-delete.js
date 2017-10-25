// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to mongoDB server');
  }
  console.log('Connected to MongoDB server');

  // deleteMany
  // db.collection('Todos').deleteMany({text: 'eat lunch'}).then((result) => {
  //   console.log(result);
  // });

  //deleteOne
  // db.collection("Todos").deleteOne({text: 'eat lunch'}).then((result) => {
  //   console.log(result);
  // });


  //findOneAndDelete
  // db.collection("Todos").findOneAndDelete({completed: false}).then((result) => {
  //   console.log(result);
  // });
  var users = db.collection("Users")

  users.deleteMany({name: "Farhan"}).then((result) => {
    console.log("one deleted");
    console.log(result);
  });

  users.findOneAndDelete({
    _id: new ObjectID('59f0f96ff863b8152a2437b2')
  }).then((result) => {
    console.log("deleted one:");
    console.log(result);
  });

  //db.close();
});
