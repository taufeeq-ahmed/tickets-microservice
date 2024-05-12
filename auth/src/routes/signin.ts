import express, { Request, Response } from "express";
import { body, validationResult } from "express-validator";
import { RequestValidationError } from "../errors";
import User from "../models/user";
import BadRequestError from "../errors/bad-request-error";
import { isValidPassword } from "../helpers/password";

const router = express.Router()

const validatorMidleware = [
    body("email")
        .isEmail()
        .withMessage("please provide a valid email"),
    body("password")
        .trim()
        .notEmpty()
        .withMessage("password should have 8 to 20 characters")
]

const signinUser = async (email: string, password: string) => {
    const user = await User.findOne({ email })
    if (!user)
        throw new BadRequestError("no user exists with email: " + email)

    const isValid = await isValidPassword(user.password, password)
    if (!isValid)
        throw new BadRequestError("password is wrong for email: " + email)

}

router.post("/api/users/signin", validatorMidleware, async (req: Request, res: Response) => {
    const errors = validationResult(req)
    if (!errors.isEmpty())
        throw new RequestValidationError(errors.array())

    const { email, password } = req.body
    const userToken = await signinUser(email, password)

    res.send("sign-in")
})

export { router as signinRouter }