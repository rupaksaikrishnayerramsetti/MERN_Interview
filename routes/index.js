const express = require("express")
const router = express.Router()
const {handleLogin, handleSignup, handleUserDetails} = require("../controllers/Users")

router.post("/login", handleLogin)
router.post("/signup", handleSignup)
router.get("/userdetails", handleUserDetails)

module.exports = router