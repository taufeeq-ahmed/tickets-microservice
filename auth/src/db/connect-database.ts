import mongoose from "mongoose"

const connectDatabase = async () => {
    try {
        await mongoose.connect('mongodb://auth-database:27017/auth')
        console.log("✅ database connection success");
    } catch (error) {
        console.log("❌ database connection failed");
    }
}

export default connectDatabase
