const express = require("express")
const cookieParser = require("cookie-parser")
const cors = require("cors")
require("dotenv").config()

const app = express()

const allowedOrigins = (process.env.FRONTEND_URLS || process.env.FRONTEND_URL || "http://localhost:5173,http://127.0.0.1:5173")
  .split(",")
  .map((origin) => origin.trim())
  .filter(Boolean)

app.use(express.json())
app.use(cookieParser())
app.use(cors({
  origin(origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      return callback(null, true)
    }

    return callback(new Error("CORS origin not allowed"))
  },
  credentials: true
}));

/* require all the routes here */
const authRouter = require("./routes/auth.routes")
const interviewRouter = require("./routes/interview.routes")


/* using all the routes here */
app.use("/api/auth", authRouter)
app.use("/api/interview", interviewRouter)

app.get("/", (req, res) => {
  res.send("AI Interview Backend is running 🚀");
});

module.exports = app
