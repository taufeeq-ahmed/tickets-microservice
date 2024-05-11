import CustomError from "./custom-error"

class DatabaseConnectionError extends CustomError {
    reason: string
    statusCode = 500
    constructor(reason: string) {
        super()
        this.reason = reason
        Object.setPrototypeOf(this, DatabaseConnectionError.prototype)
    }

    serializeErrors() {
        return [
            { message: this.reason }
        ]
    }
}

export default DatabaseConnectionError