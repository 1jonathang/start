// this file will be responsible for all the authentication

import { UpstashRedisAdapter } from "@next-auth/upstash-redis-adapter";
import { NextAuthOptions } from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import { db } from "./db";

// checks if we dont set clientids
function getGoogleCredentials() {
  const clientId = process.env.GOOGLE_CLIENT_ID;
  const clientSecret = process.env.GOOGLE_CLIENT_SECRET;

  if (!clientId || clientId.length === 0) 
    throw new Error("Missing GOOGLE_CLIENT_ID");
  if (!clientSecret || clientSecret.length === 0)
    throw new Error("Missing GOOGLE_CLIENT_SECRET");

  return { clientId, clientSecret };
}

function getGithubCredentials() {
  const Id = process.env.GITHUB_ID;
  const Secret = process.env.GITHUB_SECRET;

  if (!Id || Id.length === 0) 
    throw new Error("Missing GITHUB_ID");
  if (!Secret || Secret.length === 0)
    throw new Error("Missing GITHUB_SECRET");

  return { Id, Secret };
}

export const authOptions: NextAuthOptions = {
  // everytime someone calls this auth, when they login, a certain action within our db will be taken, user data will be put into the db automatically
  // npm install @next-auth/upstash-redis-adapter
  adapter: UpstashRedisAdapter(db),
  session: {
    // jwt = jason web token, we don't handle the session on the db, so we can verify the session in our middleware later on to protect our routes easier
    strategy: "jwt",
  },
  pages: {
    signIn: "/",
  },
  providers: [
    GoogleProvider({
      clientId: getGoogleCredentials().clientId,
      clientSecret: getGoogleCredentials().clientSecret,
    }),
    GitHubProvider({
      clientId: getGithubCredentials().Id,
      clientSecret: getGithubCredentials().Secret,
    })
  ],
  secret: process.env.JWT_SECRET,
  // actions that are taken when certain events happen that next-auth detects
  callbacks: {
    async jwt({ token, user }) {
      console.log(user);
      if (user) {
        // if a new user has logged in, update the token with the new user info
        token = {
          ...token,
          id: user.id,
          name: user.name,
          email: user.email,
          picture: user.image,
        }
      }
      return token;
    },
  
    async session({session, token}) {
      if (token) {
        session.user = {
          ...session.user,
          id: token.id,
          name: token.name,
          email: token.email,
          image: token.picture,
        };
      }
      return session;
    },
    // if a user has signed in we want to redirect them
    redirect() {
        return '/';
    },
  },
};
