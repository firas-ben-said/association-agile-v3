import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    fullname:{
        type: String,
        required: true,
        min : 3,
        max : 20
    },
    username: {
        type: String,
        required: true,
        unique : true,
        min : 3,
        max : 20
    },
    dob: {
        type: Date,
    },
    genre: {
        type: String,
    },
    email: {
        type: String,
        required: true,
        unique : true
    },
    password: {
        type: String,
    },
    img: {
        type: String,
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    phone: {
        type: String,   
    },
}
, { timestamps: true }
);

const eventSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique : true,
        min : 3,
        max : 20
    },
    description: {
        type: String,
        required: true,
    },
    img: {
        type: String,
    },
    date: {
        type: Date,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    organizer: {
        type: String,
        required: true
    },
    places: {
        type: Number,
        required: true
    },
},
{ timestamps: true }
);

export const User = mongoose.models?.User || mongoose.model('User', userSchema);
export const Event = mongoose.models?.Event || mongoose.model('Event', eventSchema);