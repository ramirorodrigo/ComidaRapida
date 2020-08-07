var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var mongoose = require("mongoose");
var app = express();

//configuracion
app.use(bodyParser.json());
app.use(methodOverride());

//Definir el puerto por el cual vamos a escuchar

app.listen(3000, function() {
  console.log("nuestro servidor escucha por el puerto 3000");
})

//definir el enrutamiento de las solicitudes

var router = express.Router();

router.get('/', function(req, res) {
  res.send("hola mundo de el servicio node js")
})

app.use(router);
