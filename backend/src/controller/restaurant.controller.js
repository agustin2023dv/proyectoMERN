const restaurantCtrl = {}
const Restaurant = require('../models/Restaurant');

restaurantCtrl.getRestaurants = async (req, res) => {
    try {
        const restaurants = await Restaurant.find();
        res.json(restaurants);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

restaurantCtrl.createRestaurant = async (req, res) => {
    try {
        const { name, address, phoneNumber, email } = req.body;
        const newRes = new Restaurant({
            name: name,
            address: address,
            phoneNumber: phoneNumber,
            email: email
        })

        await newRes.save();
        res.json();
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

restaurantCtrl.getRestaurant = async (req, res) => {
    try {
        const restaurant = await Restaurant.findById(req.params.id);
        res.json(restaurant);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

restaurantCtrl.deleteRestaurant = async (req, res) => {
    try {
        const restaurant = await Restaurant.findByIdAndDelete(req.params.id);
        res.json({ message: "The restaurant has been deleted" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

restaurantCtrl.updateRestaurant = async (req, res) => {
    try {
        const { name, address, phoneNumber, email } = req.body;
        await Restaurant.findByIdAndUpdate(req.params.id, {
            name,
            address,
            phoneNumber,
            email
        });
        res.json({ message: "The restaurant has been updated" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

module.exports = restaurantCtrl;
