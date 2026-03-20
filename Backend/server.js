require("dotenv").config()
const app = require("./src/app")
const connectToDB = require("./src/config/database")

connectToDB()


app.listen(Process.env.PORT || 5000, () => {
    console.log("Server is running on port " + (Process.env.PORT || 5000))
})