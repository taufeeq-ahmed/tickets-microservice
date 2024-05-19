import express from "express"
import "express-async-errors"
import bodyParser from 'body-parser'

import { currentUserRouter, signinRouter, signoutRouter, signupRouter } from "./routes"
import errorHandler from "./middlewares/error-handler"

import connectDatabase from "./db/connect-database"
import NotFoundError from "./errors/not-found-error"
import cookieSession from "cookie-session"
import Logger from "./utils/logger"
const cors = require("cors")
const app = express()

app.set('trust proxy', true)

app.use(cors({
    origin: 'https://ticketz.dev',
    credentials: true
}));

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieSession({
    signed: false,
    secure: true,
    domain: "ticketz.dev"
}))

app.use(currentUserRouter)
app.use(signinRouter)
app.use(signoutRouter)
app.use(signupRouter)

app.use(errorHandler)

app.all("*", async () => {
    throw new NotFoundError()
})

const startDb = async () => {
    await connectDatabase()
}
startDb()

app.listen(3000, () => {
    Logger.success("auth-server up on port : 3000");
})
