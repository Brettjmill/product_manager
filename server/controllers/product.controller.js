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
        console.log('find one method executed', 'url params:', req.params);

        Product.findById(req.params.id)
            .then((product) => {
                res.json(product);
            })
            .catch((err) => {
                res.status(400).json(err);
            })
    },

    updateProduct: function (req, res) {
        console.log('update product method executed', 'url params:', req.params);

        Product.findByIdAndUpdate(req.params.id, req.body, {
            runValidators: true,
            new: true
        })
            .then((product) => {
                res.json(product);
            })
            .catch((err) => {
                res.status(400).json(err);
            })
    },

    deleteProduct: function (req, res) {
        console.log('delete product method executed', 'url params:', req.params);

        Product.findByIdAndDelete(req.params.id)
            .then ((product) => {
                res.json(product);
            })
            .catch ((err) => {
                res.status(400).json(err);
            }) 

        
    }
};

