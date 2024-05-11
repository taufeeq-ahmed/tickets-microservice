import { NextFunction, Request, Response } from "express"
import { DatabaseConnectionError, RequestValidationError, CustomError } from "../errors";
import HttpStatusCodes from "../utils/status-codes";


const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
    console.log("error", err)
    if (err instanceof CustomError) {
        return res.status(err.statusCode).send(err.serializeErrors());
    }

    res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).send({
        errors: [{ message: JSON.stringify(err) }],
    });
}

export default errorHandler
