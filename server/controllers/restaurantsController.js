const models = require('../models/beenThereModels');

const restaurantController = {};

restaurantController.getRestaurants = (req, res, next) => {
  models.Restaurant.find({}, (err, restaurants) => {
    if (err) {
      const error = {
        log: `Mongoose error in getRestaurants controller: \n ${err}`,
        status: 500,
        message: 'Error: Middleware error in getRestaurants. See Console.',
      };
      next(error);
    };

    console.log(`getRestaurants response: ${restaurants}`);
    res.locals.restaurants = restaurants;
    next();
  });
};

restaurantController.postRestaurants = (req, res, next) => {
  const restaurants = req.body;
  models.Restaurant.insertMany(restaurants, (err, queryRes) => {
    if (err) {
      const error = {
        log: `Mongoose error in postRestaurants controller: \n ${err}`,
        status: 500,
        message: 'Error: Middleware error in getRestaurants. See Console.',
      };
      next(error);
    };
    console.log(`postRestaurants response: ${queryRes}`);
    res.locals.postedRestaurants = queryRes;
    next();
  });
};

module.exports = restaurantController;
