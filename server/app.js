const express = require("express")
const app = express()
const hostname = "127.0.0.1";
const cookieParser = require("cookie-parser");

const dotenv = require("dotenv")

dotenv.config({ path: "./config.env" })
const port = process.env.PORT;
// const User = require("./models/userSchema")

require("./db/conn")
app.use(express.json())
app.use(cookieParser())

app.use(require("./router/auth"))

app.get("/", (req, res) => {
    res.status(200).send("Hello world from the backend")
})

app.listen(port, () => console.log(`server is running at http://${hostname}:${port}`))