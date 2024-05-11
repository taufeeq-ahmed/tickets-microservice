import HttpStatusCodes from "../utils/status-codes";
import CustomError from "./custom-error";

class NotFoundError extends CustomError {
    statusCode = HttpStatusCodes.NOT_FOUND

    constructor() {
        super()
        Object.setPrototypeOf(this, NotFoundError.prototype)
    }

    serializeErrors() {
        return [{ message: "Not Found" }]
    }
}

export default NotFoundError
