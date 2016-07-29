var mongoose = require('mongoose');
var Admin = require('../models/admin.js');
var assert = require('assert');

mongoose.connect('mongodb://localhost/crudtest');

var admin;

describe('Admins', function(){
  it('debe guardar una nueva admina en BD', function(done){
    admin = new Admin({email: "admin@admin.com", password: "123456" });
    admin.save(done);
  });

  it('Autenticar un admin', function(done){
    assert.ok(admin.authenticate("123456"), 'Fallo la auth');
    assert.ok(!admin.authenticate("incorrect"), 'Fallo la auth');
    done();
  });

});
