import { Schema, model } from "mongoose";

const usersSchema = new Schema({
  nickname: {
    type: String,
    required: true,
  },
  fullname: {
    type: String,
    require: true,
  },
  phone: String,
  city: String,
});

export default model("user", usersSchema);
