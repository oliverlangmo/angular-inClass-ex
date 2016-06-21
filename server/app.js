var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var urlencodedParser=bodyParser.urlencoded( { extended: false } );
var pg = require('pg');
var connectionString  = 'postgres://localhost:5432/TASKMASTER';


app.listen(8080, 'localhost', function(req,res){
console.log('server is listening');

});
app.use( express.static( "public" ) );

//base url
app.get( '/', function( req, res ){
  res.sendFile( path.resolve( 'public/views/index.html' ) );
}); // end base url
