import express from "express";
import { detectEvent } from "../controllers/aiController.js";
import { protectRoute } from "../middleware/auth.js";

const router = express.Router();

router.post("/detect-event", protectRoute, detectEvent);

export default router;
