import User from "../models/user.model";
import { errorHandler } from "../utils/error";
import bcrypt from "bcryptjs";

export const updateUser = async (req, res, next) => {
  try {
    if (req.user.id !== req.params.id) {
      return errorHandler(401, "Unauthorized");
    }
    if (req.body.password) {
      req.body.password = bcrypt.hashSync(req.user.password, 10);
    }
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: {
          username: req.body.username,
          email: req.body.email,
          password: req.body.password,
        },
      },
      { new: true }
    );
    const { password, ...rest } = updatedUser._doc;
    res.status(200).json(rest);
  } catch (error) {
    next(error);
  }
};

export const deleteUser = async (req, res, next) => {
  try {
    if (req.user.id !== req.params.id) {
      return errorHandler(401, "You can only delete your own account");
    }
    await User.findByIdAndUpdate(req.params.id);
    res.status(201).json({ message: "User deleted successfully!!" });
  } catch (error) {
    next(error);
  }
};
