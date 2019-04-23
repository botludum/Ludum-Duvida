// FileName: index.js

// Import express
let express = require('express')

// Initialize the app
let app = express();

// Setup server port
var port = process.env.PORT || 8080;

// Import routes
let apiRoutes = require("./routes/api-routes");

// Use Api routes in the App
app.use('/api', apiRoutes);

// Send message for default URL
app.get('/', (req, res) => res.send('Hello World'));

// Import Body parser
let bodyParser = require('body-parser');

// Import Mongoose
let mongoose = require('mongoose');

// Configure bodyparser to handle post requests
app.use(bodyParser.urlencoded({
   extended: true
}));

app.use(bodyParser.json());

// Connect to Mongoose and set connection variable
mongoose.connect('mongodb://localhost/8080');

var db = mongoose.connection;

app.listen(port, function () {
     console.log("Running on port " + port);
});