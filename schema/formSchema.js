const mongoose = require('mongoose');

const formSchema = mongoose.Schema({
        name: {
            type: String,
            required: true
        },

        email: {
            type: String,
            lowercase: true,
            trim: true,
            required: true
        },

        message: {
            type: String,
            required: true
        }

    }, {
        timestamps: true
    }
);


module.exports = mongoose.model('Form', formSchema);