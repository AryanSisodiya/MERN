const express = require("express")
const bcrypt = require("bcryptjs")
const router = express.Router();
require("../db/conn")
const User = require("../models/userSchema")

router.post("/register", async (req, res) => {
    const { name, email, phone, work, password, cpassword } = req.body;

    if (!name || !phone || !password || !cpassword || !work || !email) return res.status(422).json({ error: "All fields are required!" })

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
        return res.status(501).json({ "error": `There is an error, error: ${err}` })
    }

})

router.post("/signin", async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) return res.status(400).json({ message: "Invalid Credentials" })

        const userLogin = await User.findOne({ email: email })

        if (userLogin) {
            const isMatch = await bcrypt.compare(password, userLogin.password)

            if (!isMatch) res.status(400).json({ message: "Invalid Credentials" })
            else res.status(200).json({ message: "signed in successfully" })

        } else return res.status(400).json({ message: "Invalid Credentials" })

    } catch (err) { return res.status(501).json({ message: "An error occured!: " + err }) }
})

module.exports = router