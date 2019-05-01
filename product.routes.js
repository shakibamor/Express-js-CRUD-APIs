module.exports = (app) => {
    const products = require('./product.controller.js');

    // parse requests
    /* The default type for HTML forms is application/x-www-urlencoded, but you can also submit data as JSON or any other arbitrary format.
    bodyParser.urlencoded() provides middleware for automatically parsing forms with the content-type application/x-www-urlencoded */
    var bodyParser = require('body-parser')
    app.use(bodyParser.urlencoded({ extended: false }))
    app.use(bodyParser.json())
    var jsonParser = bodyParser.json()
    //Enable CORS for all HTTP methods
    var cors = require('cors')
    app.use(cors())

    // Retrieve all Products
    app.get('/products', products.findAll);

    // Create a new Product
    app.post('/products', jsonParser, products.create);

    // Retrieve a single Product with productId
    app.get('/products/:productId', products.findOne);

    // Update a Note with productId
    app.put('/products/:productId',  jsonParser, products.update);

    // Delete a Note with productId
    app.delete('/products/:productId', products.delete);
}