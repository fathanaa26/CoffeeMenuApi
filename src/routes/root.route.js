import express from "express";
import { landing, login, logout } from "../controllers/root.controller.js";

const router = express.Router();

router.get("/", landing);
router.get("/logout", logout);
router.post("/", login);

export default router;
