const mongoose = require("mongoose");

mongoose
    .connect("mongodb+srv://new_user:skipper1007@cluster0.t3cyiey.mongodb.net/user")
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
    interests: Array,
    title: Array,
    history: { type: Array, default: [] }
});

const User = mongoose.model("User", userSchema);

module.exports = User;
