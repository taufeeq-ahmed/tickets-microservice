import HttpStatusCodes from "../utils/status-codes";
import CustomError from "./custom-error";

class NotAuthorizedError extends CustomError {
    statusCode = HttpStatusCodes.FORBIDDEN

    constructor() {
        super()
        Object.setPrototypeOf(this, NotAuthorizedError.prototype)
    }

    serializeErrors() {
        return [{ message: "Not Authorized" }]
    }
}

export default NotAuthorizedError
