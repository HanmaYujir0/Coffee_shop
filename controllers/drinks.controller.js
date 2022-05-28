const Drinks = require('../models/Drinks.model');



module.exports.drinksController = {
    getDrinks: (req, res) => {
        Drinks.find({}).select('-id drinkName price').then((data) => {
            res.json(data)
        })
            .catch((err) => {
                res.json('Error.Please, try again!')
            })
    },
    getDrinksPresence: (req, res) => {
        Drinks.find({ presence: true }).then((data) => {
            res.json(data)
        })
            .catch((err) => {
                res.json('Error.Please, try again!')
            })
    },
    getDrinksById: (req, res) => {
        Drinks.findById(req.params.id).then((data) => {
            res.json(data)
        })
            .catch((err) => {
                res.json('Error.Please, try again!')
            })
    },
    postDrinks: (req, res) => {
        Drinks.create({
            drinkName: req.body.drinkName,
            price: req.body.price,
            presence: req.body.presence,
            caffeine: req.body.caffeine,
            capacity: req.body.capacity,
            description: req.body.description,
        }).then(() => {
            res.json('Напиток добавлен')
        })
            .catch((err) => {
                res.json('Error.Please, try again!')
            })
    },
    deleteDrinks: (req,res) => {
        Drinks.findByIdAndRemove(req.params.id).then(() => {
            res.json('Напиток удален')
        })
            .catch((err) => {
                res.json('Error.Please, try again!')
            })
    },
    patchDrinks: (req,res) => {
        Drinks.findByIdAndUpdate(req.params.id, {
            drinkName: req.body.drinkName,
            price: req.body.price,
            presence: req.body.presence,
            caffeine: req.body.caffeine,
            capacity: req.body.capacity,
            description: req.body.description,
        }).then(() => {
            res.json('Напиток изменен')
        })
            .catch((err) => {
                res.json('Error.Please, try again!')
            })
    },
};