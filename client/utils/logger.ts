abstract class Logger {
    static success(msg: string | Error) {
        console.log("✅ " + msg)
    }
    static failure(msg: string | Error) {
        console.log("❌ " + msg)
    }
}

export default Logger