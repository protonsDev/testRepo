import mongoose from "mongoose";
//Define schema
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  phoneNumber: Number,
  password: String,
  Gender: String,
  isActive: Boolean,
});
//create Model
const User = mongoose.model("User", userSchema);

export default User;

