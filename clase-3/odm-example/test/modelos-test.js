var mongoose = require('mongoose');
var Proveedores = require('../models/proveedores.js');
mongoose.connect('mongodb://localhost/test');

describe('Proveedores Tests', function(){
  it("Debe crear un proveedor", function(done){
    // Test
    var p = new Proveedores({ nombre: "Jose" });
    p.save(function(err){
      done(err);
    });
  });
});
