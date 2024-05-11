import { ValidationError } from "express-validator";

class RequestValidationError extends Error {
    errors: ValidationError[]
    statusCode = 400
    constructor(errors: ValidationError[]) {
        super()
        this.errors = errors
        Object.setPrototypeOf(this, RequestValidationError.prototype)
    }

    serializeError() {
        return this.errors.map((error) => {
            if (error.type === 'field') {
                return { message: error.msg, field: error.path };
            }
        });
    }
}

export default RequestValidationError
