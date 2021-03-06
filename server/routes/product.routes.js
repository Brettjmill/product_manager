const productController = require('../controllers/product.controller');

module.exports = (app) => {
    app.post('/api/products', productController.create);
    app.get('/api/products', productController.findAll);
    app.get('/api/products/:id', productController.findOne);
    app.put('/api/products/:id', productController.updateProduct);
    app.delete('/api/products/:id', productController.deleteProduct);
}

