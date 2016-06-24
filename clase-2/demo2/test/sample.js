var alcuad = function (n){
  return (n*n)+1;
}

var assert = require('assert');

describe('Intro a testing', function(){

  it('Debe pasar', function(){
    console.log(alcuad(2));
    assert.equal(alcuad(2), 4, 'Se esperaba 4');
  });

  it('recordar mejorar check de tipo');


  it('Error', function(){
    throw new Error("Debe ser erroneo");
  });

})
