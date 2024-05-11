class DatabaseConnectionError extends Error {
    reason: String
    statusCode = 500
    constructor(reason: String) {
        super()
        this.reason = reason
        Object.setPrototypeOf(this, DatabaseConnectionError.prototype)
    }

    serializeError() {
        return [
            { message: this.reason }
        ]
    }
}

export default DatabaseConnectionError