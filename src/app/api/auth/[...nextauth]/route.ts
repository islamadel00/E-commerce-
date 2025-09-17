import NextAuth, { AuthOptions, User } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { jwtDecode } from "jwt-decode";

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials) {
          return null;
        }
        try {
          const res = await fetch("https://ecommerce.routemisr.com/api/v1/auth/signin", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email: credentials.email,
              password: credentials.password,
            }),
          });

          const data = await res.json();

          console.log('Sign-in API response:', data);

          if (res.ok && data.token) {
            return { ...data.user, token: data.token };
          } else {
            console.error('Authentication failed:', data.message);
            return null;
          }
        } catch (error: unknown) {
          console.error('Authentication error:', error);
          return null;
        }
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  pages: {
    signIn: "/signin",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        const customUser = user as User & { token: string };
        token.user = customUser;
        try {
          const decodedToken: { id: string } = jwtDecode(customUser.token);
          token.id = decodedToken.id;
        } catch (error) {
          console.error('JWT decode error:', error);
        }
      }
      return token;
    },
    async session({ session, token }) {
      if (token.user) {
        session.user = token.user as User & { token: string; id: string; };
        session.user.id = token.id as string;
      }
      return session;
    },
  },
  debug: process.env.NODE_ENV === 'development',
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
