var mongoose = require('mongoose');
var dbURI = "mongodb://0.0.0.0:27017/MEAN";;
mongoose.connect(dbURI);

//Connection events
//when the connection is made
mongoose.connection.on('connected', function() {
    console.log('Mongoose connected' + dbURI);
});

//when there is an error
mongoose.connection.on('error', function(err) {
    console.log('Mongoose error' + err);
});

//when connection is disconnected
mongoose.connection.on('disconnected', function() {
    console.log('Mongoose disconnected');
});
 
// For nodemon restarts
 
require('./location');
