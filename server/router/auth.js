const express = require("express")
const bcrypt = require("bcryptjs")
const router = express.Router();
require("../db/conn")
const User = require("../models/userSchema");
const authenticate = require("../middleware/authenticate")

router.post("/signup", async (req, res) => {
    const { name, email, phone, work, password, cpassword } = req.body;

    if (!name || !phone || !password || !cpassword || !work || !email) {
        console.log(name, email, phone, work, password, cpassword)
        return res.status(422).json({ message: "All fields are required!" })
    }

    try {
        const userExist = await User.findOne({ email: email });

        if (userExist) return res.status(422).json({ message: "Email already exists!" })

        else if (password !== cpassword) return res.status(400).json({ message: "Password is not same as entered in confirm password" })

        else {
            const user = new User({ name, email, phone, work, password, cpassword })

            await user.save();
            res.status(201).json({ message: "User registered!" })
        }

    } catch (err) {
        return res.status(501).json({ message: `There is an error, error: ${err}` })
    }

})

router.post("/signin", async (req, res) => {
    try {
        let token;
        const { email, password } = req.body;

        if (!email || !password) return res.status(400).json({ message: "Invalid Credentials" })

        const userLogin = await User.findOne({ email: email })

        if (userLogin) {
            const isMatch = await bcrypt.compare(password, userLogin.password)

            if (!isMatch) res.status(400).json({ message: "Invalid Credentials" })
            else {
                token = await userLogin.generateAuthToken();
                console.log(token)

                res.cookie("jwtoken", token, {
                    expires: new Date(Date.now() + 25892000000),
                    httpOnly: true
                });

                res.status(200).json({ message: "signed in successfully" })
            }

        } else return res.status(400).json({ message: "Invalid Credentials" })

    } catch (err) { return res.status(501).json({ message: "An error occured!: " + err }) }
})

router.get("/about", authenticate, (req, res) => {
    res.send(req.rootUser);
})

router.get("/getData", authenticate, (req, res) => {
    res.send(req.rootUser);
})

router.post("/contact", authenticate, async (req, res) => {
    try {
        const { name, email, phone, message } = req.body;
        if (!name || !email || !phone || !message) {
            return res.status(401).json({ message: "All fields are required" })
        }

        const userContact = await User.findOne({ _id: req.userId })
        if (userContact) {
            const userMessage = await userContact.addMessage(name, email, phone, message)
            await userContact.save();
            return res.status(201).json({message: "Message send successfully"});
        }  

        return res.status(401).json({message: "You must be sign in to contact us"});

    } catch (err) { res.status(501).json({ message: err }) }
})

module.exports = router