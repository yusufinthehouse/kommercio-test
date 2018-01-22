var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProductSchema = new mongoose.Schema({
    name: { type: String},
    price: { type: Number,  min: 0, required: true}
});

mongoose.model('Product', ProductSchema);

module.exports = { 
	model : mongoose.model('product', ProductSchema),
	object: mongoose.model('product')
}