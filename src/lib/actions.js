"use server";

import { revalidatePath } from "next/cache";
import { auth, signIn, signOut } from "./auth";
import { Event, Token, User } from "./models";
import { connectToDB } from "./utils";
import bcrypt from "bcryptjs";
import { redirect } from "next/navigation";
import { getPasswordResetTokenByEmail, getPasswordResetTokenByToken } from "./data";
import sendResetPasswordEmail from "./sendMail";
import { v4 as uuidv4 } from "uuid";
import { getSession } from "next-auth/react";

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

        await Event.findByIdAndUpdate(id, updateFields);
        console.log("event updated successfully!");
    } catch (err) {
        console.log(err);
        throw new Error("Failed to update event!");
    }
    revalidatePath("/admin/events");
    redirect("/admin/events");
};

export const register = async (previousState, formData) => {
    const { fullname, username, email, password, passwordRepeat, dob, img, phone, genre } = Object.fromEntries(formData);

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
            dob,
            genre,
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

export const generateResetToken = async (email) => {
    const token = uuidv4();
    const expires = new Date(new Date().getTime() + 3600 * 1000); // 1 hour

    const existingToken = await getPasswordResetTokenByEmail(email);

    if (existingToken) {
        await Token.findByIdAndDelete(existingToken._id);
    };

    const passwordResetToken = new Token({
        id: uuidv4(),
        email,
        token,
        expires,
    });

    await passwordResetToken.save();
    return passwordResetToken;
}

export const forgetPassword = async (formData) => {
    const { email } = Object.fromEntries(formData);

    if (!email) {
        return { error: "Email is required!" };
    }

    try {
        connectToDB();
        const user = await User.findOne({ email });

        if (!user) {
            return { error: "Email provided does not exist!" };
        }

        const passwordResetToken = await generateResetToken(email);
        // console.log(passwordResetToken)
        await sendResetPasswordEmail(passwordResetToken.email, passwordResetToken.token);
        console.log("Email sent successfully!");
    } catch (err) {
        console.log(err);
        throw new Error("failed to send reset email!");
    }
};

export const resetPassword = async (token, password, confirmPassword) => {
    if (!token) return { error: "Missing token" };

    // const { password, confirmPassword } = Object.fromEntries(formData);

    if (password !== confirmPassword) {
        return { error: "Passwords do not match" };
    }

    try {
        connectToDB();
        const existingToken = await getPasswordResetTokenByToken(token);

        if (!existingToken) {
            return { error: "Invalid token" };
        }

        const hasExpired = new Date() > existingToken.expires;

        if (hasExpired) {
            return { error: "Token has expired" };
        }

        const existingUser = await User.findOne({ email: existingToken.email });

        if (!existingUser) {
            return { error: "User not found" };
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        await User.findByIdAndUpdate(existingUser._id, { password: hashedPassword});

        await Token.findById(existingToken._id).deleteOne();
        console.log(password)
        console.log("Password reset successfully!");
        return { success: true };
        
    } catch (err) {
        console.log(err);
        throw new Error("failed to reset password");
    }
   
}

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

// export const getSessionData = async (context) => {
//     const session = await getSession(context);
//     return session?.user || null;
// }
