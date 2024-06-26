import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google"; // Add Google provider
import { connectToDB } from "./utils";
import { User } from "./models";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { authConfig } from "./auth.config";
import { isAbsoluteUrl } from "next/dist/shared/lib/utils";
import credentials from "next-auth/providers/credentials";


const login = async (credentials) => {
    try {
        connectToDB();
        const user = await User.findOne({ username: credentials.username });

        if (!user) {
            throw new Error("User not found!");
        }

        const isPasswordCorrect = await bcrypt.compare(credentials.password, user.password);

        if (!isPasswordCorrect) {
            throw new Error("Password is incorrect!");
        }

        return user;
    } catch (err) {
        console.log(err);
        throw new Error("failed to login!");
    }
}

export const { handlers: { GET, POST }, auth, signIn, signOut } = NextAuth({
    ...authConfig,
    providers: [
        GitHub({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
        }),
        Google({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET,
            authorization: {
                params: {
                  prompt: "consent",
                  access_type: "offline",
                  response_type: "code"
                }
            }
        }),
        CredentialsProvider({
            async authorize(credentials) {
                try {
                    const user = await login(credentials);
                    return user;
                } catch (err) {
                    return null;
                }
            }
        })
    ],
    callbacks: {
        async signIn({ user, account, profile }) {
            if (account.provider === "github") {
                connectToDB();
                try {
                    const user = await User.findOne({ email: profile.email });

                    if (!user) {
                        const newUser = new User({
                            fullname: profile.name,
                            username: profile.login,
                            email: profile.email,
                            img: profile.avatar_url,
                            isAdmin: profile.site_admin,
                        })
                        await newUser.save();
                    }

                } catch (err) {
                    console.log(err);
                    return false;
                }
            }
            return true;
        },
        ...authConfig.callbacks
    }
});
