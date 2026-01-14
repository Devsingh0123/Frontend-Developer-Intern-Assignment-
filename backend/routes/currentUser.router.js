import express from "express";
import isAuth from "../middleware/isAuth.middleware.js";
import { currentUser } from "../controllers/currentUser.controller.js";

const router = express.Router();

router.get("/currentUser", isAuth, currentUser);


export default router;