import express from "express"
import "express-async-errors"
import bodyParser from 'body-parser'

import { currentUserRouter, signinRouter, signoutRouter, signupRouter } from "./routes"


import connectDatabase from "./db/connect-database"

import cookieSession from "cookie-session"
import errorHandler from "@maestro-ticketz/common/build/middlewares/error-handler"
import NotFoundError from "@maestro-ticketz/common/build/errors/not-found-error"
import Logger from "@maestro-ticketz/common/build/utils/logger"

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
