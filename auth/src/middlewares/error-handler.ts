import { NextFunction, Request, Response } from "express"
import { DatabaseConnectionError, RequestValidationError, CustomError } from "../errors";


const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
    if (err instanceof CustomError) {
        return res.status(err.statusCode).send(err.serializeErrors());
    }

    res.status(400).send({
        errors: [{ message: 'Something went wrong' }],
    });
}

export default errorHandler
