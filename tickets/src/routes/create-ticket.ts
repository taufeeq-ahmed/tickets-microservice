import currentUserExtractor from "@maestro-ticketz/common/build/middlewares/current-user-extractor";
import validateAuth from "@maestro-ticketz/common/build/middlewares/vaidate-auth";
import HttpStatusCodes from "@maestro-ticketz/common/build/utils/status-codes";
import express, { Request, Response } from "express";

const router = express.Router()

router.post("/api/tickets",
    currentUserExtractor,
    validateAuth,

    async (req: Request, res: Response) => {
        res.status(HttpStatusCodes.CREATED).send({ message: "ticket created" })
    }
)

export { router as createTicketRouter }
