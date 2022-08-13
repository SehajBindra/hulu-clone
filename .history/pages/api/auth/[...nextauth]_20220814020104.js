import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.NEXT_AUTH_CLIENT_ID,
      clientSecret: process.env.NEXT_AUTH_CLIENT_SECRET,
    }),

    // ...add more providers here
  ],

  secret: process.env.NEXT_AUTH_SECRET,

  pages: {
    signIn: "/signin",
  },
});
