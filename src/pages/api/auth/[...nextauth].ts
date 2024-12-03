// import NextAuth from "next-auth/next";
// import Credentials from "next-auth/providers/credentials";
// import { loginUser } from "@/lib/actions/user";

// export default NextAuth({
//   providers: [
//     Credentials({
//       id: "credentials",
//       name: "Credentials",
//       credentials: {
//         email: {
//           label: "Email",
//           type: "text",
//           id: ""
//         },
//         password: {
//           label: "Password",
//           type: "passord",
//           id: "password",
//         },
//       },
//     //   async authorize(credentials) {
//     //     if (!credentials?.email || !credentials?.password) {
//     //       throw new Error("Email and password required");
//     //     }
//     //     const user = await loginUser({email: credentials?.email, password: credentials?.password})
//     //     return user;
//     //   },
//     }),
//   ],
//   pages: {
//     signIn: "/login",
//   },
//   debug: process.env.NODE_ENV === "development",
// //   adapter: "",
//   session: { strategy: "jwt" },
//   jwt: {
//     secret: process.env.NEXT_APP_SECRET_KEY,
//   },
//   secret: process.env.NEXT_APP_SECRET_KEY,
// });
