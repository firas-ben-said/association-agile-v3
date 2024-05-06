import { Event, User } from "./models";
import { connectToDB } from "./utils";

export const getEvents = async () => {
    try {
        connectToDB();
        const events = await Event.find();
        return events;
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

export const getUsers = async (q) => {
    // console.log("q: ",q);
    const regex = new RegExp(q, "i");
    try {
        connectToDB();
        const users = await User.find({username:{ $regex: regex}});
        return users;
    } catch (error) {
        console.error(error);
        throw new Error("failed to fetch users");
    }
};
