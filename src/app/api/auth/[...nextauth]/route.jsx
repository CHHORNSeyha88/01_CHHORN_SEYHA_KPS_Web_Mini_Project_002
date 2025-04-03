import { loginService } from "@/service/auth/login.service";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOption = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      
		  // credentials: {b
      //  username: { label: "Username", type: "text", placeholder: "jsmith" },
      //  password: { label: "Password", type: "password" },
      // },
      
      async authorize(data) {
        // console.log("authorize :", data);
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
    
  ],
  
  // Optional: Usage When Deployment   
  secret: process.env.NEXTAUTH_SECRET,
  
  // Optional
  session: {
    strategy: "jwt", // Adjust this based on your session strategy
  },
  
  // Custom Login page
     // pages: {
    //   signIn: "/login",
    // },
  callbacks: {
    async jwt({ token, user }) {
      return { ...token, ...user };
    },
    async session({ session, token }) {
      session.user = token;
      return session;
    },
  },
};
const handler = NextAuth(authOption);

export { handler as GET, handler as POST };