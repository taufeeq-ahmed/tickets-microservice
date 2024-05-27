import currentUserExtractor from "@maestro-ticketz/common/build/middlewares/current-user-extractor";
import validateRequest from "@maestro-ticketz/common/build/middlewares/request-validator";
import validateAuth from "@maestro-ticketz/common/build/middlewares/vaidate-auth";
import HttpStatusCodes from "@maestro-ticketz/common/build/utils/status-codes";
import express, { Request, Response } from "express";
import { body } from "express-validator";
import Ticket from "../../models/ticket";
import { getTicket } from "./get-ticket";
import NotFoundError from "@maestro-ticketz/common/build/errors/not-found-error";
import NotAuthorizedError from "@maestro-ticketz/common/build/errors/not-authorized-error";

const router = express.Router()

const validatorMidleware = [
    body("title")
        .not()
        .isEmpty()
        .withMessage("title is required"),
    body("price")
        .isNumeric()
        .withMessage("price must be a number")
]

const updateTicket = async (id: string, title: string, price: number) => {
    await Ticket.updateOne({ id }, { title, price })
}

router.put("/api/tickets/:id",
    currentUserExtractor,
    validateAuth,
    validatorMidleware,
    validateRequest,

    async (req: Request, res: Response) => {
        const ticket = await getTicket(req.params.id)

        if (!ticket)
            throw new NotFoundError()

        if (ticket.userId !== req.currentUser!.id)
            throw new NotAuthorizedError()

        const { title, price } = req.body

        await updateTicket(req.params.id, title, price)

        res.status(HttpStatusCodes.CREATED).send({ message: "ticket updated" })
    }
)

export { router as updateTicketRouter }
