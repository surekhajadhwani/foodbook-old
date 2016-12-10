module.exports = function () {
    var mongoose = require("mongoose");
    var RestaurantSchema = require("../restaurant/restaurant.schema.server")(mongoose);

    var UserSchema = mongoose.Schema({
        username: String,
        password: String,
        facebook:   {
            id:    String,
            token: String
        },
        google:   {
            id:    String,
            token: String
        },
        firstName: String,
        lastName: String,
        email: String,
        phone: String,
        gender: {type: String, enum: ['MALE', 'FEMALE', 'UNKNOWN']},
        location: String,
        profile_pic_url: {type: String, default: "http://placehold.it/120x120"},
        reviews: [{type: mongoose.Schema.Types.ObjectId, ref: 'ReviewModel'}],
        favorites: [{type: String, ref: 'RestaurantModel'}],
        //favorites: [RestaurantSchema],
        following: [{type: mongoose.Schema.Types.ObjectId, ref: 'UserModel'}],
        role: {type: String, default: "FOODIE", enum: ['ADMIN', 'FOODIE']},
        dateCreated: {type: Date, default: Date.now}
    }, {collection: 'foodbooker'});

    return UserSchema;
};