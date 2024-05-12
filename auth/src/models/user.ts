import mongoose from "mongoose"
import { getHashedPassword } from "../helpers/password"

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
}, {
    toJSON: {
        // this is view level logic
        transform(doc, ret) {
            ret.id = ret._id
            delete ret._id
            delete ret.password
        },
        versionKey: false
    }
})

userSchema.statics.build = function (props: UserProps): UserDoc {
    return new User(props);
};

userSchema.pre('save', async function (done) {
    if (this.isModified('password')) {
        const hashedPassword = await getHashedPassword(this.get('password'))
        this.set('password', hashedPassword);
    }
    done();
});

const User = mongoose.model<UserDoc, UserModel>('User', userSchema)

export default User
