import express, { Request, Response } from "express";
import { body, validationResult } from "express-validator"
import { DatabaseConnectionError, RequestValidationError } from "../errors";
import User from "../models/user";
import BadRequestError from "../errors/bad-request-error";
import HttpStatusCodes from "../utils/status-codes";

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

router.post("/api/users/signup", validatorMidleware, async (req: Request, res: Response) => {
    const errors = validationResult(req)
    if (!errors.isEmpty())
        throw new RequestValidationError(errors.array())

    const { email, password } = req.body

    const existingUser = await User.findOne({ email })
    if (existingUser)
        throw new BadRequestError("user already exists with email: " + email)

    const newUser = User.build({ email, password })

    await newUser.save()

    res.status(HttpStatusCodes.CREATED)
})

export { router as signupRouter }
