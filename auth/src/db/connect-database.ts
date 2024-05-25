import Logger from "@maestro-ticketz/common/build/utils/logger";
import mongoose from "mongoose"


const connectDatabase = async () => {
    try {
        await mongoose.connect('mongodb://auth-database:27017/auth')
        Logger.success("database connection success");
    } catch (error) {
        Logger.failure("database connection failed");
    }
}

export default connectDatabase
