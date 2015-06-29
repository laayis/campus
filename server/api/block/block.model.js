'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var BlockSchema = new Schema({
  name: String,
  type: Boolean, //	0->man, 1->woman
  rooms: [{type: mongoose.Schema.Types.ObjectId, ref: 'Room'}]
});

module.exports = mongoose.model('Block', BlockSchema);