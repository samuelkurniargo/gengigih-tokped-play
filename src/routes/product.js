import Express from "express";
import { getProductList } from "../controllers/productController.js";

const router = Express.Router();

router.get("/:id", getProductList);

export default router;
