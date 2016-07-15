var mongoose = require('mongoose');
var Person = require('../models/persons.js');
var assert = require('assert');

mongoose.connect('mongodb://localhost/nuevadb');

describe('Persons', function(){
  it('debe guardar una nueva persona en BD', function(done){
    var p = new Person({name: "Fede" });
    p.save(done);
  });

  it('debe guardar una nueva persona en BD', function(done){
    var rndName = "Fede"+(parseInt(Math.random()*1000)+1);
    var p = new Person({name: rndName });
    p.save(function(err, doc){
      assert.ok(doc.name === rndName, 'No son iguales');
      done(err);
    });
  });

});
