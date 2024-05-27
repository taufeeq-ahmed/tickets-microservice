import currentUserExtractor from "@maestro-ticketz/common/build/middlewares/current-user-extractor";
import validateAuth from "@maestro-ticketz/common/build/middlewares/vaidate-auth";
import HttpStatusCodes from "@maestro-ticketz/common/build/utils/status-codes";
import express, { Request, Response } from "express";

import Ticket from "../../models/ticket";

const router = express.Router()

const listTickets = async () => {
    return await Ticket.find({})
}

router.get("/api/tickets",
    currentUserExtractor,
    validateAuth,

    async (req: Request, res: Response) => {
        const tickets = await listTickets()
        res.status(HttpStatusCodes.OK).send(tickets)
    }
)

export { router as listTicketsRouter }
