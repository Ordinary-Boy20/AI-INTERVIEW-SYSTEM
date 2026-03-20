require('dotenv').config()
const jwt = require("jsonwebtoken")
const tokenBlacklistModel = require("../models/blacklist.model")

function getTokenFromRequest(req) {
    const cookieToken = req.cookies.token
    if (cookieToken) {
        return cookieToken
    }

    const authHeader = req.headers.authorization || req.headers.Authorization
    if (!authHeader || typeof authHeader !== "string") {
        return null
    }

    if (!authHeader.startsWith("Bearer ")) {
        return null
    }

    return authHeader.slice(7).trim()
}

async function authUser(req, res, next) {

    const token = getTokenFromRequest(req)

    if (!token) {
        return res.status(401).json({
            message: "Token not provided."
        })
    }

    const isTokenBlacklisted = await tokenBlacklistModel.findOne({
        token
    })

    if (isTokenBlacklisted) {
        return res.status(401).json({
            message: "token is invalid"
        })
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)

        req.user = decoded

        next()

    } catch (err) {

        return res.status(401).json({
            message: "Invalid token."
        })
    }

}


module.exports = { authUser }
