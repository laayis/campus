'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ProductSchema = new Schema({
  name: String,
  type: String,
  category: {type : Schema.Types.ObjectId, ref : 'Category'},
  allocation: {type : Schema.Types.ObjectId, ref : 'Allocation'}
});

module.exports = mongoose.model('Product', ProductSchema);