var Product = require('../models/product');

var config = require('../config/config.json')

module.exports = { 
    /**
     * Create product on system
     */
    create: function(req, res){
        var name = req.body.name;
        var price = req.body.price;
        
		if(req == undefined || name == undefined || price == undefined){
			base_helpers.setFailedResponse(res, "The request parameter is not complete!");
		}else{
            /*create new item*/
            var product = new Product.model({ "name": name, "price": price });
            product.save(function(err, product){
                if (err) {
                    base_helpers.setFailedResponse(res, err);
                } else {
                    var data = {
                        "product": product
                    }

                    base_helpers.setSucceededResponse(res, 201, data);
                }
                return ;
            });
		}
	},

    /**
     * Get data product based on its id
     */
    get: function(req, res){
        var product_id = req.params.id;

		if(product_id == undefined){
			base_helpers.setFailedResponse(res, "The request parameter is not complete!");
		}else{
			Product.object
				.findById(product_id)
				.exec(function(err, product){
					if (err || product == null ) {
						base_helpers.setFailedResponse(res, "Product is not found!");
					} else {
                        var data = {
                            "product": product
                        }

						base_helpers.setSucceededResponse(res, 200, data);
					}
					return ;
			})
		}
	}
}