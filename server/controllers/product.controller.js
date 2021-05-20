const Product = require('../models/product.model');

module.exports = {

    create: function (req,res) {
        console.log('create method executed');

        Product.create(req.body)
            .then((product) => {
                res.json(product);
            })
            .catch((err) => {
                res.status(400).json(err);
            });
    },

    findAll: function (req, res) {
        console.log('find all method executed');

        Product.find()
            .then((products) => {
                res.json(products);
            })
            .catch((err) => {
                res.status(400).json(err);
            });
    },

    findOne: function (req, res) {
        console.log('find one method executed');

        Product.findById(req.params.id)
            .then((product) => {
                res.json(product);
            })
            .catch((err) => {
                res.status(400).json(err);
            })
    }
}

