const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
    title: String,
    description: String,
    price: Number,
    company: String
}, {
    // This property will add two fields automatically to schema. These fields are : createdAt and updatedAt in your schema.
    timestamps: true
});

module.exports = mongoose.model('Products', ProductSchema);