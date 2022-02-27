import express from "express";
import { signUpUser } from "./userController.js";

const router = express.Router();

router.post('/signup', signUpUser);

export default router;
