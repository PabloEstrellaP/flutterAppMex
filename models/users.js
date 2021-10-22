
const {Schema, model} = require('mongoose');

const User = Schema({

    name: {
        type: String,
        required: true
    },
    imgPath: {
        type: String,
    },
    email: {
        type: String,
        required: true,
        // unique:true
    },
});

module.exports = model('User', User);