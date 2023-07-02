import express from "express";
import {
  create,
  getAll,
  getId,
  removeId,
  updateId,
} from "../controllers/root.controller.js";
import date from "../middlewares/date.md.js";

const router = express.Router();

router.use(date);
router.post("/", create);
router.get("/", getAll);
router.get("/:id", getId);
router.put("/:id", updateId);
router.delete("/:id", removeId);

export default router;
