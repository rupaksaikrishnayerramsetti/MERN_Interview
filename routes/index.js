const express = require("express")
const router = express.Router()
const {handleLogin, handleSignup, handleUserDetails, handleUpdateUserDetails, handleChangePassword} = require("../controllers/Users")

router.post("/login", handleLogin)
router.post("/signup", handleSignup)
router.get("/userdetails", handleUserDetails)
router.put("/updateUserDetails", handleUpdateUserDetails)
router.put("/changePassword", handleChangePassword)

module.exports = router