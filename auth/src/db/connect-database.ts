import mongoose from "mongoose"
import Logger from "../utils/logger";

const connectDatabase = async () => {
    try {
        await mongoose.connect('mongodb://auth-database:27017/auth')
        Logger.success("database connection success");
    } catch (error) {
        Logger.failure("database connection failed");
    }
}

export default connectDatabase
