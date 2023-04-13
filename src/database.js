import { connect } from "mongoose";

export const connectDB = async () => {
  await connect("mongodb://localhost/testgraph").then(() =>
    console.log("db connected successfuly")
  );
};
