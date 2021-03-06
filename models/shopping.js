'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ShoppingSchema = Schema({
  lista: String,
  pass: String,
  items: [
    {
      _id: Schema.Types.ObjectId,
      tachado: Boolean,
      nombre: String,
      precio: Number
    }
  ]
});

// exportamos el modelo
module.exports = mongoose.model('Shopping', ShoppingSchema);
