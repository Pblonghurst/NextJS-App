import NextAuth from "next-auth";
import Cognito from "next-auth/providers/cognito";

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    Cognito({
      clientId: process.env.COGNITO_CLIENT_ID!,
      issuer: process.env.COGNITO_ISSUER!,
      client: {
        token_endpoint_auth_method: "none",
      },
    }),
  ],
});
 

