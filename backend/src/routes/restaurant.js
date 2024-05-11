const {Router} = require('express');
const router = Router();

const {getRestaurant,getRestaurants,createRestaurant,deleteRestaurant,updateRestaurant} = 
require('../controller/restaurant.controller');

router.route('/')
    .get(getRestaurants)
    .post(createRestaurant)
router.route('./:id')
    .get(getRestaurant)
    .delete(deleteRestaurant)
    .put(updateRestaurant);
module.exports = router;