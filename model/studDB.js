const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: [true, "Email id already exist"],
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error("Invalid")
            }

        }
    }
})