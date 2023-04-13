import express from "express";
import { createSchema, createYoga } from "graphql-yoga";
import { connectDB } from "./database.js";

import resolvers from "./resolvers.js";
import typeDefs from "./typeDefs.js";

const app = express();

const yoga = createYoga({
  schema: createSchema({
    typeDefs,
    resolvers,
  }),
});

app.use(yoga);

const connectApp = async () => {
  try {
    await connectDB();

    app.listen(3000);
  } catch (error) {
    console.log(error);
    process.exit();
  }
};

connectApp();
