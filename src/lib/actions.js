"use server";

import { revalidatePath } from "next/cache";
import { signIn, signOut } from "./auth";
import { Event, User } from "./models";
import { connectToDB } from "./utils";
import bcrypt from "bcryptjs";
import { redirect } from "next/navigation";

export const addUser = async (formData) => {
    const { fullname, username, email, password, img, phone, isAdmin } = Object.fromEntries(formData);


    try {
        connectToDB();
        // check if username already exists
        const user = await User.findOne({ username });

        if (user) {
            return { error: "Username already exists!" };
        }
        // check if email already exists
        const userEmail = await User.findOne({ email });

        if (userEmail) {
            return { error: "Email already exists!" };
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new User({
            fullname,
            username,
            email,
            password: hashedPassword,
            img,
            phone,
            isAdmin,
        });

        await newUser.save();
        console.log("User added successfully");
        // revalidatePath("/admin");
    } catch (err) {
        console.error(err);
        return { error: "An error occurred" };
    }
    revalidatePath("/admin/users");
    redirect("/admin/users");
};

export const updateUser = async (formData) => {
    const { id, fullname, username, email, password, img, phone, isAdmin } = Object.fromEntries(formData);

    try {
        connectToDB();

        const updateFields = {
            fullname,
            username,
            email,
            password,
            img,
            phone,
            isAdmin,
        };

        Object.keys(updateFields).forEach(
            (key) => 
                (updateFields[key] === "" || undefined) && delete updateFields[key]
        );

        await User.findByIdAndUpdate(id, updateFields);
        console.log("user updated successfully!");
    } catch (err) {
        console.log(err);
        throw new Error("Failed to update user!");
    }
    revalidatePath("/admin/users");
    redirect("/admin/users");
};

export const deleteUser = async (formData) => {
    const { id } = Object.fromEntries(formData);

    try {
        connectToDB();

        await User.findByIdAndDelete(id);
        console.log("deleted from db");
        revalidatePath("/admin");
    } catch (err) {
        console.log(err);
        return { error: "Something went wrong!" };
    }
};

export const addEvent = async (formData) => {
    const { title, description, img, date, location, organizer, places } = Object.fromEntries(formData);

    try {
        connectToDB();
        const newEvent = new Event({
            title,
            description,
            img,
            date,
            location,
            organizer,
            places,
        });

        await newEvent.save();
        console.log("saved to db");
    } catch (err) {
        console.log(err);
        return { error: "Something went wrong!" };
    }
    revalidatePath("/admin/events");
    redirect("/admin/events");
};

export const deleteEvent = async (formData) => {
    const { id } = Object.fromEntries(formData);

    try {
        connectToDB();

        await Event.findByIdAndDelete(id);
        console.log("deleted from db");
    } catch (err) {
        console.log(err);
        return { error: "Something went wrong!" };
    }
    revalidatePath("/admin/events");
};

export const updateEvent = async (formData) => {
    const { id, title, description, img, date, location, organizer, places } = Object.fromEntries(formData);

    try {
        connectToDB();

        const updateFields = {
            title,
            description,
            img,
            date,
            location,
            organizer,
            places,
        };

        Object.keys(updateFields).forEach(
            (key) => 
                (updateFields[key] === "" || undefined) && delete updateFields[key]
        );

        await Product.findByIdAndUpdate(id, updateFields);
        console.log("event updated successfully!");
    } catch (err) {
        console.log(err);
        throw new Error("Failed to update product!");
    }
    revalidatePath("/admin/events");
    redirect("/admin/events");
};

export const register = async (previousState, formData) => {
    const { fullname, username, email, password, passwordRepeat, img, phone } = Object.fromEntries(formData);

    if (password !== passwordRepeat) {
        return { error: "Passwords do not match" };
    }

    try {
        connectToDB();
        const user = await User.findOne({ username });

        if (user) {
            return { error: "Username already exists!" };
        }

        const userEmail = await User.findOne({ email });

        if (userEmail) {
            return { error: "You already have an account with this email!" };
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new User({
            fullname,
            username,
            email,
            password: hashedPassword,
            img,
            phone,
        });

        await newUser.save();
        console.log("User registered successfully");
        return { success: true };
    } catch (err) {
        console.error(err);
        return { error: "An error occurred" };
    }
};







export const login = async (previousState, formData) => {
    const { username, password } = Object.fromEntries(formData);

    try {
        await signIn("credentials", { username, password });
    } catch (err) {
        console.log(err);
        throw err;
    }
};

export const handleGithubLogin = async () => {
    await signIn("github")
};

export const handleGithubLogout = async () => {
    await signOut();
    //redirect to home
    redirect("/");
};


export const handleGoogleLogin = async () => {
    await signIn("google");
};

