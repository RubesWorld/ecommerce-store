import express from "express";
import expressAsynchandler from "express-async-handler";
import data from "../data.js";
import User from "../models/userModel.js";

const userRouter = express.Router();

userRouter.get(
  "/seed",
  expressAsynchandler(async (req, res) => {
    await User.remove({});
    const createdUsers = await User.insertMany(data.users);
    res.send({ createdUsers });
  })
);

export default userRouter;
