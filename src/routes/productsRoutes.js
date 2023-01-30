import { Router } from "express";
import {
  getProductById,
  getProducts,
  registerProduct,
} from "../controllers/productsControllers.js";

import { authRoutesValidation } from "../middlewares/authMiddlewares.js";
import { validateSchema } from "../middlewares/productsMiddleware.js";
import { productSchema } from "../schema/productSchema.js";

const router = Router();

// router.use(authRoutesValidation);
router.post("/products", validateSchema(productSchema), registerProduct);
router.get("/products", getProducts);
router.get("/product/:id", getProductById);

export default router;
