const express = require('express');
const restaurantController = require('../controllers/restaurantsController');

const router = express.Router();

router.get('/all',
    restaurantController.getRestaurants,
    (req, res, next) => {
      res.send(res.locals.restaurants);
    },
);

router.post('/insertNew',
    restaurantController.postRestaurants,
    (req, res, next) => {
      res.send(res.locals.postedRestaurants);
    },
);

module.exports = router;
