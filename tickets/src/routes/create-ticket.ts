import currentUserExtractor from "@maestro-ticketz/common/build/middlewares/current-user-extractor";
import validateRequest from "@maestro-ticketz/common/build/middlewares/request-validator";
import validateAuth from "@maestro-ticketz/common/build/middlewares/vaidate-auth";
import HttpStatusCodes from "@maestro-ticketz/common/build/utils/status-codes";
import express, { Request, Response } from "express";
import { body } from "express-validator";
import Ticket from "../../models/ticket";

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

const createTicket = async (title: string, price: number, userId: string) => {
    const newTicket = Ticket.build({
        title, price, userId
    })
    await newTicket.save()
}

router.post("/api/tickets",
    currentUserExtractor,
    validateAuth,
    validatorMidleware,
    validateRequest,

    async (req: Request, res: Response) => {
        const { title, price } = req.body

        await createTicket(title, price, req.currentUser!.id)

        res.status(HttpStatusCodes.CREATED).send({ message: "ticket created" })
    }
)

export { router as createTicketRouter }
