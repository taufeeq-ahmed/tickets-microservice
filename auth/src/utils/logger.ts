abstract class Logger {
    static success(msg: string) {
        console.log("✅ " + msg)
    }
    static failure(msg: string) {
        console.log("❌ " + msg)
    }
}

export default Logger