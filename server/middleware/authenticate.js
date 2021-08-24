const jwt = require("jsonwebtoken");
const User = require("../models/userSchema")

const Authenticate = async (req, res, next) => {
    try {

        const token = req.cookies.jwtoken;
        const verifyUser = jwt.verify(token, process.env.SECRET_KEY);
        const rootUser = await User.findOne({ _id: verifyUser._id, "tokens.token": token });

        if (!rootUser) { throw new Error("User not found") }

        req.token = token;
        req.rootUser = rootUser;
        req.userId = rootUser._id;

        next()

    } catch (err) {
        res.status(401).send("Unauthorized: No token provided");
        console.log(err)
    }
}

module.exports = Authenticate;