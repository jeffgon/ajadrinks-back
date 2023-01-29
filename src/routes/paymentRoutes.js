import { Router } from "express";
import { authRoutesValidation } from "../middlewares/authMiddlewares.js";
import { validateSchema } from "../middlewares/productsMiddleware.js";
import { paymentSchema } from "../schema/paymentSchema.js";
import { payment } from "../controllers/paymentController.js";

const router = Router();

router.use(authRoutesValidation)
router.post("/payment", validateSchema(paymentSchema), payment)

export default router;