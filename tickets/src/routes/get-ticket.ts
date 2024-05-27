import currentUserExtractor from "@maestro-ticketz/common/build/middlewares/current-user-extractor";
import validateAuth from "@maestro-ticketz/common/build/middlewares/vaidate-auth";
import HttpStatusCodes from "@maestro-ticketz/common/build/utils/status-codes";
import express, { Request, Response } from "express";

import Ticket from "../../models/ticket";
import NotFoundError from "@maestro-ticketz/common/build/errors/not-found-error";

const router = express.Router()

const getTicket = async (id: string) => {
    return await Ticket.findById(id)
}

router.get("/api/tickets/:id",
    currentUserExtractor,
    validateAuth,

    async (req: Request, res: Response) => {
        const ticket = await getTicket(req.params.id)
        if (!ticket) {
            throw new NotFoundError()
        }
        res.status(HttpStatusCodes.OK).send(ticket)
    }
)

export { router as getTicketRouter }
