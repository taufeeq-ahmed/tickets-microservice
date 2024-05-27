import express from "express"
import "express-async-errors"
import bodyParser from 'body-parser'



import connectDatabase from "./db/connect-database"

import cookieSession from "cookie-session"
import errorHandler from "@maestro-ticketz/common/build/middlewares/error-handler"
import NotFoundError from "@maestro-ticketz/common/build/errors/not-found-error"
import Logger from "@maestro-ticketz/common/build/utils/logger"
import { createTicketRouter } from "./routes/create-ticket"
import { listTicketsRouter } from "./routes/list-tickets"
import { getTicketRouter } from "./routes/get-ticket"
import { updateTicketRouter } from "./routes/update-ticket"

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

app.use(createTicketRouter)
app.use(getTicketRouter)
app.use(listTicketsRouter)
app.use(updateTicketRouter)

app.use(errorHandler)

app.all("*", async () => {
    throw new NotFoundError()
})

const startDb = async () => {
    await connectDatabase()
}
startDb()

app.listen(3000, () => {
    Logger.success("tickets-server up on port : 3000");
})
