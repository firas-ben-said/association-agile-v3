import { revalidatePath } from "next/cache";

export const authConfig = {
    pages:{
        signIn: "/login",
    },
    providers: [],
    callbacks: {
        async jwt({token, user}) {
            if (user) {
                token.id = user.id;
                token.fullname = user.fullname;
                token.username = user.username;
                token.email = user.email;
                token.phone = user.phone;
                token.dob = user.dob;
                token.genre = user.genre;
                token.img = user.img;
                token.isAdmin = user.isAdmin;
            }
            return token;
        },
        async session({session, token}) {
            if (session) {
                session.user.id = token.id;
                session.user.fullname = token.fullname;
                session.user.username = token.username;
                session.user.email = token.email;
                session.user.phone = token.phone;
                session.user.dob = token.dob;
                session.user.genre = token.genre;
                session.user.img = token.img;
                session.user.isAdmin = token.isAdmin;
            }
            return session;
        },
        authorized({auth, request}){
            const user = auth?.user;
            const isOnAdminPanel = request.nextUrl?.pathname.startsWith("/admin");
            const isOnUserPanel = request.nextUrl?.pathname.startsWith("/user");
            const isOnEventPage = request.nextUrl?.pathname.startsWith("/event");
            const isOnLoginPage = request.nextUrl?.pathname.startsWith("/login");
            const isOnProfilePage = request.nextUrl?.pathname.startsWith("/profile");


            // ONLY ADMINS CAN ACCESS THE ADMIN PANEL
            if (isOnAdminPanel && !user?.isAdmin) {
                return Response.redirect(new URL("/", request.nextUrl));
            }

            // ONLY AUTHENTICATED USERS CAN ACCESS THE PROFILE PAGE
            if(isOnProfilePage && !user){
                return Response.redirect(new URL("/", request.nextUrl));
            }

            // ONLY AUTHENTICATED USERS CAN ACCESS THE USER PANEL
            if (isOnUserPanel && !user) {
                return Response.redirect(new URL("/", request.nextUrl));
            }

            // ONLY AUTHENTICATED USERS CAN ACCESS THE EVENT PAGE
            if (isOnEventPage && !user) {
                return false;
            }


            // ONLY AUTHENTICATED USERS CAN ACCESS THE LOGIN PAGE
            if (isOnLoginPage && user) {
                return Response.redirect(new URL("/", request.nextUrl));
            }
            return true;
        }
    }
}
