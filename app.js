//import modules

var express = require('express');
var mongoose = require('mongoose');
var bodyparser = require('body-parser');
var cors = require('cors');
var path = require('path');

var app = express();

const route = require('./routes/route');

//connect to mongodb
mongoose.connect("mongodb://localhost:27017/contactlist");
mongoose.connection.on('connected',function(){
    console.log('Connected to database mongodb @ 27017');
})
mongoose.connection.on('error',function(err){
    if(err){
        console.log('Error in database connection' + err);
    }
})
//end
//Port no
const port = 3000;

// adding middleaware  - cors
app.use(cors());

// body parser Parses the text as JSON and exposes the resulting object on req.body.
app.use(bodyparser.json());

//static file : Pass the name of the directory that contains the static
// assets to the express.static middleware function to start serving the files directly.
// For example, use the following code to serve images, CSS files, and JavaScript files
// in a directory named public:
app.use(express.static(path.join(__dirname,'public')));



app.use('/api', route);

app.get('/',function(req,res){
    res.send('foobar');
});
app.listen(port,function(){
    console.log('Server started at port:'+ port);
});