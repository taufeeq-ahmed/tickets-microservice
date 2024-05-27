import Logger from "@maestro-ticketz/common/build/utils/logger";
import mongoose from "mongoose"


const connectDatabase = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI!)
        Logger.success("database connection success");
    } catch (error) {
        Logger.failure("database connection failed" + error);
    }
}

export default connectDatabase
