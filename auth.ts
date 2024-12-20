import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "@/lib/prisma";
import Credentials from "next-auth/providers/credentials";
import { SignInSchema } from "@/lib/zod";
import { compareSync } from "bcrypt-ts";

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(prisma),
  session: { strategy: "jwt" },
  pages: {
    signIn: "/login",
  },
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        const validatedFileds = SignInSchema.safeParse(credentials);

        if (!validatedFileds.success) {
          return null;
        }
        const { email, password } = validatedFileds.data;

        const user = await prisma.user.findUnique({
          where: { email },
        });
        if (!user || !user.password) {
          throw new Error("No user found");
        }

        const passwordMAtch = compareSync(password, user.password);

        if (!passwordMAtch) return null;
        return user;
      },
    }),
  ],

  // callback proteksi jika user sudah login dan sudah login
  callbacks: {
    authorized({auth, request: {nextUrl}}) {
      const isLoggedIn = !!auth?.user;
      const ProtectedRoutes = ["/user", "/dashboard", "product"]

      // logika jika user belum login maka akan di proteksi
      if(!isLoggedIn && ProtectedRoutes.includes(nextUrl.pathname)) {
        return Response.redirect(new URL("/login", nextUrl))
      }

      // logika jika user sudah login tidak bisa akses /login
      if(isLoggedIn && nextUrl.pathname.startsWith("/login")) {
        return Response.redirect(new URL("/user", nextUrl))
      }

      return true
    },
    jwt({token, user}) {
      if(user) token.role = user.role;
      return token
    },

    session({session, token}) {
      session.user.id = token.sub
      session.user.role = token.role;
      return session;
    }
  }
});
