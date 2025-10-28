import express from "express";
import { updateProfile } from "../controllers/userController.js";
import { signup,login,checkAuth } from "../controllers/userController.js";
import { protectRoute } from "../middleware/auth.js";
import User from "../models/User.js";

const userRouter =express.Router();


userRouter.post("/signup",signup);
userRouter.post("/login",login);
userRouter.put("/updated-profile",protectRoute,updateProfile);
userRouter.get("/check",protectRoute,checkAuth);


export default userRouter;