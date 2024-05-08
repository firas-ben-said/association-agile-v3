import { session } from "./actions";
import { Event, Token, User } from "./models";
import { connectToDB } from "./utils";

export const getEvents = async (q, page) => {
    const regex = new RegExp(q, "i");

    const eventPerPage = 5;

    try {
        connectToDB();
        const count = await Event.find({ title: { $regex: regex }}).count();
        const events = await Event.find({ title: { $regex: regex }}).limit(eventPerPage).skip(eventPerPage * (page - 1));
        return {count, events};
    } catch (error) {
        console.error(error);
        throw new Error("failed to fetch events");
    }
};

export const getEvent = async (id) =>{
    try {
        connectToDB();
        const event = await Event.findById(id);
        return event;
    } catch (error) {
        console.error(error);
        throw new Error("failed to fetch event");
    }
};


export const getUser = async (id) => {
    try {
        connectToDB();
        const user = await User.findById(id);
        return user;
    } catch (error) {
        console.error(error);
        throw new Error("failed to fetch users");
    }
};

export const getUsers = async (q,page) => {
    const regex = new RegExp(q, "i");

    const userPerPage = 5;
    try {
        connectToDB();
        const count = await User.find({username:{ $regex: regex}}).count();
        const users = await User.find({username:{ $regex: regex}}).limit(userPerPage).skip(userPerPage * (page-1));
        return {users, count};
    } catch (error) {
        console.error(error);
        throw new Error("failed to fetch users");
    }
};


export const getPasswordResetTokenByToken = async (token) => {
    try {
        const passwordResetToken = await Token.findOne({ token });

        return passwordResetToken;
    } catch (err) {
        console.log(err);
        throw new Error("failed to fetch token");
    }
}

export const getPasswordResetTokenByEmail= async (email) => {
    try {
        const passwordResetToken = await Token.findOne({ email });

        return passwordResetToken;
    } catch (err) {
        console.log(err);
        throw new Error("failed to fetch token");
    }
}
