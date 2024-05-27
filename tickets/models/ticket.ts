import mongoose from "mongoose"

interface TicketProps {
    title: string,
    price: number,
    userId: string
}

interface TicketDoc extends mongoose.Document {
    title: string,
    price: number,
    userId: string
}

interface TicketModel extends mongoose.Model<TicketDoc> {
    build(props: TicketProps): TicketDoc
}

const ticketSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    userId: {
        type: String,
        required: true
    }
}, {
    toJSON: {
        // this is view level logic
        transform(doc, ret) {
            ret.id = ret._id
            delete ret._id
        },
        versionKey: false
    }
})

ticketSchema.statics.build = function (props: TicketProps): TicketDoc {
    return new Ticket(props);
};

const Ticket = mongoose.model<TicketDoc, TicketModel>('Ticket', ticketSchema)

export default Ticket
