import express, { Request, Response } from "express";
import currentUserExtractor from "../middlewares/current-user-extractor";
import validateAuth from "../middlewares/vaidate-auth";

const router = express.Router()

router.get(
    "/api/users/current-user",
    currentUserExtractor,
    validateAuth,

    (req: Request, res: Response) => {
        res.send({ currentUser: req.currentUser || null })
    }
)

export { router as currentUserRouter }
