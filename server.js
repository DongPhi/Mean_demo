var express = require('express');
var app = express();
var port = process.env.PORT || 8080;
var morgan = require ('morgan');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var router = express.Router();
var appRoutes = require('./app/routes/api')(router);
var path = require('path');

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname +'/public'));  
app.use('/api',appRoutes);

//mongoose
mongoose.set('useCreateIndex', true);
const mongoURI = 'mongodb://localhost:27017/tutorial'
mongoose
    .connect(mongoURI, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log("MongoDB connected..."))
    .catch(err => console.log(err))
//--------

app.get('*', function(req,res){
    res.sendFile(path.join(__dirname + '/public/app/views/index.html'));
})

app.listen(port, function(){
    console.log('Running the server on port:' + port)
});