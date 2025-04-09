import {
  userSignUpService,
  userLoginService,
  updateUserService,
} from "../service/userService.js";

import bcrypt from "bcryptjs";

export const signup = async (req, res) => {
  try {
    const { name, email, password, phoneNumber, gender, isActive } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    await userSignUpService({
      name,
      email,
      password: hashedPassword,
      phoneNumber,
      gender,
      isActive,
    });

    res.status(200).json({ message: "User signed up successfully !!!" });
  } catch (error) {
    res.status(500).json({ message: "Interval server error" });
  }
};

export const updateUserProfile = async (req, res) => {
  try {
    const updatedData = req.body;

    const isUpdated = await updateUserService(updatedData);
    if (isUpdated) {
      res
        .status(200)
        .json({ message: "User profile updated successfully !!!" });
    } else {
      res.status(500).json({ message: "Error updating user profile !!!" });
    }
  } catch (error) {
    res.status(500).json({ message: "Interval server error" });
  }
};


