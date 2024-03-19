const express = require("express")
const { mongoDBConnection } = require("./Connection")
const router = require("./routes")
const app = express()
const {logReqRes, evaluateJwt} = require("./middleware")
const dotenv = require("dotenv")
dotenv.config()
const cors = require("cors")

mongoDBConnection(process.env.MONGO_DB_CONNECTION_URL || "mongodb://127.0.0.1:27017/Interview").then(() => console.log("MongoDB connected.."))
.catch((err) => console.log("Mongodb connection error", err))

// Middlewares
app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(cors())

//middleware to authenticate the jwt token
app.use((req, res, next) => {
    // if(req.path === "/login" || req.path === "/signup"){
    //     next();
    // } else {
    //     evaluateJwt(req, res, next)
    // }
    switch (req.path) {
        case "/login":
        case "/signup":
            next();
            break;
        case "/userdetails":
            evaluateJwt(req, res, next);
            break
        default:
            res.status(404).send("The requested resource was not found on the server. Please check the URL path and try again.");
            break
    }
})
//middleware to create logs
app.use(logReqRes("log.txt"))

app.use("/", router)

const port = process.env.PORT
app.listen(port||8020, () => console.log(`Server Started at Port ${port}`))