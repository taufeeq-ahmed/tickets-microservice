import express, { Request, Response } from "express";
import { body, validationResult } from "express-validator"
import { DatabaseConnectionError, RequestValidationError } from "../errors";


const router = express.Router()

const validatorMidleware = [
    body("email")
        .isEmail()
        .withMessage("please provide a valid email"),
    body("password")
        .trim()
        .isLength({ min: 8, max: 20 })
        .withMessage("password should have 8 to 20 characters")
]

router.post("/api/users/signup", validatorMidleware, (req: Request, res: Response) => {
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
        throw new RequestValidationError(errors.array())
    }

    res.send("sign-up")
})

export { router as signupRouter }
