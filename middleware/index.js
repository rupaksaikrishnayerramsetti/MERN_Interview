const fs = require("fs")
const {JWTTokenData} = require("../helpers/Utility")

function logReqRes(filename){
    return (req, res, next) => {
        fs.appendFile(filename, 
        `\n${Date.now()}: ${req.method} ${req.path}`,
        (err, data) => {
            next()
        })
    }
}

function evaluateJwt(req, res, next) {
    if (req?.headers?.authorization) {
        const result = JWTTokenData(req.headers.authorization);
        if (result === "Invalid token") {
            return res.status(401).json({ error: "Invalid JWT token" });
        } else {
            req.tokenData = result;
            next();
        }
    } else {
        return res.status(401).json({ error: "JWT token missing in headers" });
    }
}


module.exports = {
    logReqRes,
    evaluateJwt
}