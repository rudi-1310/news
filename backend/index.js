const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require('body-parser')
const cors = require("cors");
const app = express();


// Import the User schema from "./mongo"
const User = require("./mongo");

mongoose
    .connect("mongodb+srv://new_user:skipper1007@cluster0.t3cyiey.mongodb.net/user")
    .then(() => {
        console.log("mongodb connected (app.js)");
    })
    .catch((err) => {
        console.error("Connection failed:", err);
    });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
// app.use(bodyParser.json())

// Route to handle GET request
app.get("/", cors(), (req, res) => {
    // Add your logic here if needed
    res.send("Hello World!");
});

// Route to handle POST request for login
app.post("/signin", async (req, res) => {
    const { email } = req.body;


    try {
        const user = await User.findOne({ email: email });
        if (user) {
            // You may perform password comparison here if needed
            res.json("exist");
        } else {
            res.json("notexist");
        }
    } catch (e) {
        res.json("fail");
    }
});

// Route to handle POST request for signup
app.post("/signup", async (req, res) => {
    const { email, password, FirstName, LastName, interests } = req.body;

    try {
        const check = await User.findOne({ email: email });

        if (check) {
            res.json("exist");
        } else {
            const newUser = new User({
                email: email,
                password: password,
                FirstName: FirstName,
                LastName: LastName,
                interests: interests,
            });

            await newUser.save();
            res.json("success");
        }
    } catch (e) {
        res.json("fail");
    }
});
app.post("/api/saveTitle", async (req, res) => {
    const { history } = req.body;

    try {
        console.log(history)
    }
    catch (e) {
        res.json("fail");
    }
});

app.listen(8000, () => {
    console.log("Server listening on port 8000");
});