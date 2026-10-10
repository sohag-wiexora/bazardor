
import { betterAuth } from "better-auth";
import { mongodbAdapter } from "@better-auth/mongo-adapter";
import { MongoClient } from "mongodb";

const mongoClient = new MongoClient(process.env.MONGODB_URI!);

const database = mongoClient.db("bazardor");

export const auth = betterAuth({
  database: mongodbAdapter(database),

  baseURL: process.env.BETTER_AUTH_URL,

  // Google/GitHub OAuth account linking configuration.
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
