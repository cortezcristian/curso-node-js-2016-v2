var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var Proveedores = mongoose.model('Proveedores', {
  nombre: String,
  apellido: String,
  volumen_compra: Number,
  created: Date
});

var p = new Proveedores({ nombre: "Jose" });
p.apellido = "Gonzales";
p.volumen_compra = 30000;
p.created = Date.now();

p.save(function(err, doc){
  console.log("Error: ", err);
  console.log("Doc: ", doc);
});
