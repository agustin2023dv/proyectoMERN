const restaurantCtrl = {}

const Restaurant = require('../models/Restaurant');

restaurantCtrl.getRes() = async(req,res) =>{
    const restaurants = await Restaurant.find();
    res.json(restaurants);
}

restaurantCtrl.createRes() = async(req,res) =>{
    const {name,address,phoneNumber,email} = req.body;
    const newRes = new Restaurant({
        name:name,
        address : address,
        phoneNumber:phoneNumber,
        email:email
    })

    await newRes.save();
    res.json();
}