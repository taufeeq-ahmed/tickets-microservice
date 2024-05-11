import CustomError from "./custom-error";

class NotFoundError extends CustomError {
    statusCode = 404

    constructor() {
        super()
        Object.setPrototypeOf(this, NotFoundError.prototype)
    }

    serializeErrors() {
        return [{ message: "Not Found" }]
    }
}

export default NotFoundError
