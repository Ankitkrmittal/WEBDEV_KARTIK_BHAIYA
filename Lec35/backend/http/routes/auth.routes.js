import { Router } from "express";
import { postSignup } from "../controllers/auth.controllers.js";
const router = Router();

router.post('/signup',postSignup);
// router.post('/signin',);
// router.get('/me',);

export default router;
