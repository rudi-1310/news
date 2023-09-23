const mongoose = require("mongoose");

mongoose
    .connect("mongodb://localhost:27017/pro")
    .then(() => {
        console.log("mongodb connected (mango.js)");
    })
    .catch((err) => {
        console.error("Connection failed:", err);
    });

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    password: {
        type: Number,
        required: true,
    },
    FirstName: {
        type: String,
        required: true,
    },
    LastName: {
        type: String,
        required: true,
    },
    interest: Array,
});

const User = mongoose.model("User", userSchema);

module.exports = User;
