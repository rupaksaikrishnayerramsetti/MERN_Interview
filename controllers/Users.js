const Users = require("../models/Users")
const {hashPassword} = require("../helpers/Utility")
const jwt = require("jsonwebtoken")

async function handleLogin(req, res) {
    const body = req.body
    if(!body) return res.status(401).send("Invalid Credentials")
    try {
        const passwordDigest = hashPassword(body.password)
        const user = await Users.find({email: body.email, password_digest: passwordDigest})
        if(user.length>0) {
            const result = {
                user_id: user[0]._id,
                email: user[0].email
            }
            const token = jwt.sign(result, process.env.JWT_SECRET_KEY)
            return res.send(token)
        } else {
            return res.status(401).send("Invalid User Credentials")
        }
    } catch (error) {
        console.log(error);
        return res.status(401).send(error)
    }
}

async function handleSignup(req, res) {
    const body = req.body
    try {
        if(!body) 
            return res.status(401).send("Body is empty no data found")
        const result = await Users.create({
            user_name: body.user_name,
            email: body.email,
            gender: body.gender,
            occupation: body.occupation,
            phone_number: body.phone_number,
            salary: body.salary,
            password_digest: hashPassword(body.password)
        })
        return res.send(result? "Successfully Data got inserted into database" : "Faced some trouble while inserting data into database")
    } catch (error) {
        console.log(error)
        return res.status(401).send(error)
    }
}

async function handleUserDetails(req, res) {
    try {
        if(req.tokenData) {
            const user = await Users.find({ email: req.tokenData.email, _id: req.tokenData.user_id });
            if(user.length > 0){
                const userDetails = {
                    user_id: user[0]._id,
                    user_name: user[0].user_name,
                    email: user[0].email,
                    gender: user[0].gender,
                    occupation: user[0].occupation,
                    phone_number: user[0].phone_number,
                    salary: user[0].salary,
                };
                return res.send(userDetails);
            } else {
                return res.status(404).send("User details not found");
            }
        } else {
            return res.status(401).send("Token data not available");
        }
    } catch (error) {
        console.error(error);
        return res.status(500).send("Internal Server Error");
    }
}

async function handleUpdateUserDetails(req, res) {
    try {
        const body = req.body
        if(req.tokenData) {
            const user = {
                user_name: body.user_name,
                gender: body.gender,
                occupation: body.occupation,
                phone_number: body.phone_number,
                salary: body.salary
            }
            const result = await Users.findByIdAndUpdate(req.tokenData.user_id, user);
            return result?res.status(200).send("User Details got updated successfully"):res.status(404).send("User details not found");
        } else {
            return res.status(401).send("Token data not available");
        }
    } catch (error) {
        console.error(error);
        return res.status(500).send("Internal Server Error");
    }
}

async function handleChangePassword(req, res) {
    try {
        const body = req.body
        if(req.tokenData) {
            const oldpassswordDigest = hashPassword(body.password)
            const user = await Users.find({_id: req.tokenData.user_id, password_digest: oldpassswordDigest})
            let result;
            if(user) {
                const newpass = {
                    password_digest: hashPassword(body.newpassword)
                }
                result = await Users.findByIdAndUpdate(req.tokenData.user_id, newpass);
            } else {
                result = false
            }
            return result?res.status(200).send("User password got updated successfully"):res.status(404).send("User's old password is wrong");
        } else {
            return res.status(401).send("Token data not available");
        }
    } catch (error) {
        console.error(error);
        return res.status(500).send("Internal Server Error");
    }
}

module.exports = {
    handleLogin,
    handleSignup,
    handleUserDetails,
    handleUpdateUserDetails,
    handleChangePassword
}