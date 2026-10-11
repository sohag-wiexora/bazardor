
import { betterAuth } from "better-auth";
import { mongodbAdapter } from "@better-auth/mongo-adapter";
import { MongoClient } from "mongodb";

const mongoClient = new MongoClient(process.env.MONGODB_URI!);

const database = mongoClient.db("bazardor");

export const auth = betterAuth({
  database: mongodbAdapter(database),

  baseURL: process.env.BETTER_AUTH_URL,


  trustedOrigins: [
    "http://localhost:3000",
    "http://127.0.0.1:3000",
    "https://bazardor-o9va.vercel.app",
    "https://bazardor-o9va-git-main-programar-md-sohag-chowdhuri.vercel.app",
  ],

  account: {
    accountLinking: {
      enabled: true,
      trustedProviders: ["google", "github"],
    },
  },

  emailAndPassword: {
    enabled: true,
  },

  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      prompt: "select_account",
    },

    github: {
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
    },
  },
});