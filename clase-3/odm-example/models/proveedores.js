var mongoose = require('mongoose');

var Proveedores = mongoose.model('Proveedores', {
  nombre: String,
  apellido: String,
  volumen_compra: Number,
  created: Date
});

module.exports = Proveedores;
