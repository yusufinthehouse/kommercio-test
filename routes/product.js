var express = require('express');
var router = express.Router();

var product_controller = require(__base + 'controllers/product');

// Route for product
router.post('/', product_controller.create);
router.get('/:id', product_controller.get);

module.exports = router;
