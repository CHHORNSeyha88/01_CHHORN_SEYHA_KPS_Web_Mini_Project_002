import { loginService } from "@/service/auth/login.service";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import Google from "next-auth/providers/google";
import { signOut } from "next-auth/react";

export const authOption = {
  providers: [
    
    CredentialsProvider({
      name: "Credentials",
      
      async authorize(data) {
        const userData = {
          email: data?.email,
          password: data?.password,
        };
        const userInfo = await loginService(userData)
         if (userInfo?.status === 400) {
          throw new Error(userInfo?.detail);
        }
        const { payload } = userInfo;
        return payload;
      },
    }),
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
      authorizationUrl: "https://accounts.google.com/o/oauth2/v2/auth?access_type=offline&prompt=consent", // Optional, add custom params if needed
     
    }),
    
  ],
  
  secret: process.env.NEXTAUTH_SECRET,
  
  // Optional
  session: {
    strategy: "jwt", // Adjust this based on your session strategy
  },
  
 
  callbacks: {
    async jwt({ token, user }) {
      // This is where the JWT token is created or updated
      if (user) {
        return { ...token, ...user }; // Add user data to the token
      }
      return token;
    },
    async session({ session, token }) {
      // This is where the session is populated with JWT data
      session.user = token; // Attach the token data to the session object
      return session;
    },
  }
  
};
const handler = NextAuth(authOption);

export { handler as GET, handler as POST };