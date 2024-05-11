class DatabaseConnectionError extends Error {
    reason: String
    constructor(reason: String) {
        super()
        this.reason = reason
        Object.setPrototypeOf(this, DatabaseConnectionError.prototype)
    }
}
export default DatabaseConnectionError