'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var PersonSchema = new Schema({
	code: String,
	codeType: String,
	family_name: String,
	first_name: String,
	country: String,
	niveau_etude: String,
	description: String,
	birthday: Date,
	address: String,
	city: String,
	type: String,
	status: String,
	is_archived: Boolean,
	is_banned: Boolean,
	updated: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Person', PersonSchema);