// get dependencies
const express = require('express');
const config = require('./config.js');
const mongoose = require('mongoose');

const app = express();
require('./product.routes.js')(app);  //Add route file here

mongoose.Promise = global.Promise;
// Connecting to the database
mongoose.connect(config.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});



// default route
app.get('/', (req, res) => {
    res.json({"message": "MEAN Stach app working fine"});
});

// listen on port 3000
app.listen(config.serverport, () => {
    console.log("Server is listening on port 3000");
});