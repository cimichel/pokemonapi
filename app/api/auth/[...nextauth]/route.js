import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
  providers:[
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      secret: process.env.SECRET,
      issuer: process.env.NEXTAUTH_CLIENT_ISSUER
    })
  ]

})
export { handler as GET, handler as POST }