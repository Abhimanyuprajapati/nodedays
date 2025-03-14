import { Router } from "express";
import { Login, Logout } from "../controller/auth.controller.js";

const router = Router();


// login route
router.post("/login", Login)

// logout route
router.get("/logout", Logout)

export default router;