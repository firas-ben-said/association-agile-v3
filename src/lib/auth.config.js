export const authConfig = {
    pages:{
        signIn: "/login",
    },
    providers: [],
    callbacks: {
        async jwt({token, user}) {
            if (user) {
                token.id = user.id;
                token.isAdmin = user.isAdmin;
            }
            return token;
        },
        async session({session, token}) {
            if (token) {
                session.user.id = token.id;
                session.user.isAdmin = token.isAdmin;
            }
            return session;
        },
        authorized({auth, request}){
            const user = auth?.user;
            const isOnAdminPanel = request.nextUrl?.pathname.startsWith("/admin");
            const isOnEventPage = request.nextUrl?.pathname.startsWith("/event");
            const isOnLoginPage = request.nextUrl?.pathname.startsWith("/login");

            // ONLY ADMINS CAN ACCESS THE ADMIN PANEL
            if (isOnAdminPanel && !user?.isAdmin) {
                return false;
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
