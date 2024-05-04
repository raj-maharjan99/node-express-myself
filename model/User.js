import mongoose from "mongoose";
const userSchema = mongoose.Schema(
  {
    fullname: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timeStamps: true }
);

export const User = mongoose.model("users", userSchema);
