const mongoose = require("mongoose")
const db = process.env.DATABASE

mongoose.connect(db, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}).then(() => console.log(`connection successful`))
    .catch(e => console.log(`No connection, error: ${e}`))