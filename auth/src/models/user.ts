import mongoose from "mongoose"

interface UserProps {
    email: string,
    password: string
}

interface UserDoc extends mongoose.Document {
    email: string,
    password: string
}

interface UserModel extends mongoose.Model<UserDoc> {
    build(props: UserProps): UserDoc
}

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

userSchema.statics.build = function (props: UserProps): UserDoc {
    return new User(props);
};

const User = mongoose.model<UserDoc, UserModel>('User', userSchema)

export default User
