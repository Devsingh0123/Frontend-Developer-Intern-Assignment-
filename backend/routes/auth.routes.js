
import express from "express";
import { registerUser, loginUser, logoutUser } from "../controllers/auth.controller.js";
import isAuth from "../middleware/isAuth.middleware.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/logout", logoutUser);


// test protected route
router.get("/me", isAuth, (req, res) => {
  res.json({ userId: req.user });
});


export default router;
