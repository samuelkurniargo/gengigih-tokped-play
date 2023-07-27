import Express from "express";
import {
  getCommentsList,
  addComment,
} from "../controllers/commentController.js";

const router = Express.Router();

router.get("/:id", getCommentsList);
router.post("/:id", addComment);

export default router;
