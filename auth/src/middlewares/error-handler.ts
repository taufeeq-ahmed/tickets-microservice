import { NextFunction, Request, Response } from "express"
import { DatabaseConnectionError, RequestValidationError } from "../errors";


const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
    if (err instanceof RequestValidationError) {
        return res.status(err.statusCode).send(err.serializeError());
    }

    if (err instanceof DatabaseConnectionError) {
        return res.status(err.statusCode).send(err.serializeError());
    }

    res.status(400).send({
        errors: [{ message: 'Something went wrong' }],
    });
}

export default errorHandler
