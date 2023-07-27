import Express from "express";
import { getVideoList, getDetailVideoById } from "../controllers/videoController.js";

const router = Express.Router();

router.get("/", getVideoList);
router.get("/:id", getDetailVideoById);

export default router;
