abstract class CustomError extends Error {
    abstract statusCode: number
    abstract serializeErrors(): { message: string; field?: string }[];

    constructor() {
        super()
        Object.setPrototypeOf(this, CustomError.prototype)
    }
}

export default CustomError
