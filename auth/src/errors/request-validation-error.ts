import { ValidationError } from "express-validator";
import CustomError from "./custom-error";
import HttpStatusCodes from "../utils/status-codes";

class RequestValidationError extends CustomError {
    errors: ValidationError[]
    statusCode = HttpStatusCodes.BAD_REQUEST

    constructor(errors: ValidationError[]) {
        super()
        this.errors = errors
        Object.setPrototypeOf(this, RequestValidationError.prototype)
    }

    serializeErrors() {
        return this.errors.map((error) => {
            if (error.type === 'field') {
                return { message: error.msg, field: error.path };
            } else {
                return { message: error.msg }
            }
        });
    }
}

export default RequestValidationError
