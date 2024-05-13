import express, { Request, Response } from "express";
import { body } from "express-validator"
import User from "../models/user";
import BadRequestError from "../errors/bad-request-error";
import HttpStatusCodes from "../utils/status-codes";
import jwt from 'jsonwebtoken';
import validateRequest from "../middlewares/request-validator";

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

const signupUser = async (email: string, password: string) => {
    const existingUser = await User.findOne({ email })
    if (existingUser)
        throw new BadRequestError("user already exists with email: " + email)

    const newUser = User.build({ email, password })
    await newUser.save()

    const userToken = jwt.sign({
        id: newUser.id,
        email: newUser.email
    }, process.env.JWT_KEY!)

    return userToken
}

router.post("/api/users/signup",
    validatorMidleware,
    validateRequest,

    async (req: Request, res: Response) => {
        const { email, password } = req.body
        const userToken = await signupUser(email, password)

        req.session = {
            jwt: userToken
        }

        res.status(HttpStatusCodes.CREATED).send({ message: "user created" })
    }
)

export { router as signupRouter }
