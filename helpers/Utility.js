const crypto = require("crypto");
const jwt = require("jsonwebtoken")

function JWTTokenData(token) {
    try {
        return jwt.verify(token, process.env.JWT_SECRET_KEY);
    } catch (error) {
        console.error('Error verifying JWT token:', error);
        return "Invalid token";
    }
}

function hashPassword(password) {
    const sha1Hash = crypto.createHash("sha1");
    sha1Hash.update(password);
    return sha1Hash.digest("hex");
  }

module.exports = {
    JWTTokenData,
    hashPassword
}