// Dependencias
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Schema
var personSchema = new Schema({
    name: String,
    age: Number
});

// Exportar mi modulo
module.exports = mongoose.model('Persons', personSchema);
