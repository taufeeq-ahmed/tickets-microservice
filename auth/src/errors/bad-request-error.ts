import HttpStatusCodes from "../utils/status-codes";
import CustomError from "./custom-error";

class BadRequestError extends CustomError {
    reason: string
    statusCode = HttpStatusCodes.BAD_REQUEST

    constructor(message: string) {
        super()
        this.reason = this.message
        Object.setPrototypeOf(this, BadRequestError.prototype)
    }

    serializeErrors() {
        return [{ message: this.reason }]
    }
}

export default BadRequestError
