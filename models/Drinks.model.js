const mongoose = require('mongoose');

const drinksShema = mongoose.Schema ({
    drinksName: String,
    price: Number,
    presence: Boolean,
    caffeine: Boolean,
    capacity: Number,
    description: String,
});


const Drinks = mongoose.model('Drinks', drinksShema);

module.exports = Drinks