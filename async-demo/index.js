var mongoose = require('mongoose');
var async = require('async');

mongoose.connect('mongodb://localhost/nuevadb');

var db_con = mongoose.connection;

db_con.once('open', function(){
  console.log("Conectado!");
});

var Alumno = mongoose.model('Alumno', { nombre: String, edad: Number });

//
var lista_nombres = ["Alfonso", "Ruben", "Martin", "Susana", "Juan"];

/*
for(var i=0; i < lista_nombres.length; i++){
  var a = new Alumno({nombre: lista_nombres[i]});
  a.save(function(){

  });
}
*/

async.mapSeries(lista_nombres, function(n, cb){
  console.log("Procesando: ", n);
  var a = new Alumno({nombre: n});
  a.save(function(err, doc){
    console.log("Se guardo en BD", doc);
    cb();
  });

}, function(){
  console.log("termino la opertaria");
  process.exit();
});


