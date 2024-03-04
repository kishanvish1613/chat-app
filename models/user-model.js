import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    image: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    isOnline: {
      type: String,
      default: "0",
    },
  },
  { timestamps: true }
);

userSchema.pre("save", function (next) {
  const user = this;
  const salt = bcrypt.genSaltSync(9);
  const encryptedPassword = bcrypt.hashSync(user.password, salt);
  user.password = encryptedPassword;
  next();
});


userSchema.method.comparePassword = function compare(password) {
  const user = this;
  return bcrypt.compareSync(password, user.password);
};

const User = mongoose.model("User", userSchema);

export default User;
