const { Router } = require('express');
const { drinksController } = require('../controllers/drinks.controller');


const router = Router();

router.get('/drinks', drinksController.getDrinks)
router.get('/drinks/in-stock', drinksController.getDrinksPresence)
router.get('/drinks/:id', drinksController.getDrinksById)
router.post('/drinks', drinksController.postDrinks)
router.delete('/drinks', drinksController.deleteDrinks)
router.patch('/drinks/:id', drinksController.patchDrinks)

module.exports = router