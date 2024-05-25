import currentUserExtractor from "@maestro-ticketz/common/build/middlewares/current-user-extractor";
import validateAuth from "@maestro-ticketz/common/build/middlewares/vaidate-auth";
import express, { Request, Response } from "express";



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
