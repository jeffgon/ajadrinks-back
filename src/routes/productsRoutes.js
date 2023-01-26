import { Router } from "express";
import {
  getProductById,
  getProducts,
} from "../controllers/productsControllers.js";

import { authRoutesValidation } from "../middlewares/authMiddlewares.js";

const router = Router();

router.use(authRoutesValidation);
router.get("/products", getProducts);
router.get("/product/:id", getProductById);

export default router;
