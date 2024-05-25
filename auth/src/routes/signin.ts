import express, { Request, Response } from "express";
import { body } from "express-validator";
import User from "../models/user";

import { isValidPassword } from "../helpers/password";

import jwt from 'jsonwebtoken';
import BadRequestError from "@maestro-ticketz/common/build/errors/bad-request-error";
import validateRequest from "@maestro-ticketz/common/build/middlewares/request-validator";

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

    const userToken = jwt.sign({
        id: user.id,
        email: user.email
    }, process.env.JWT_KEY!)

    return { user, userToken }
}

router.post(
    "/api/users/signin",
    validatorMidleware,
    validateRequest,

    async (req: Request, res: Response) => {
        const { email, password } = req.body
        const { user, userToken } = await signinUser(email, password)

        req.session = {
            jwt: userToken
        }

        res.status(200).send(user)
    }
)

export { router as signinRouter }
