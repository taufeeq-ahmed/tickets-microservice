import { ValidationError } from "express-validator";

class RequestValidationError extends Error {
    errors: ValidationError[]
    constructor(errors: ValidationError[]) {
        super()
        this.errors = errors
        Object.setPrototypeOf(this, RequestValidationError.prototype)
    }
}

export default RequestValidationError
