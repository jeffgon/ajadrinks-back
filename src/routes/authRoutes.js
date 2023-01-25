import { Router } from "express";
import { signIn, signUp } from "../controllers/authControllers.js";
import {
  userSchemaValidation,
  signInBodyValidation,
} from "../middlewares/authMiddlewares.js";

const router = Router();

router.post("/sign-up", userSchemaValidation, signUp);
router.post("/sign-in", signInBodyValidation, signIn);

export default router;
