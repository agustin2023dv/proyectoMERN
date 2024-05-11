const {Schema,model} = require('mongoose');

const restaurantSchema = new Schema({
    name: String,
    address: String,
    phoneNumber: Number,
    email: String
},{
    timestamps:true
});

module.exports = model('Restaurant', restaurantSchema);