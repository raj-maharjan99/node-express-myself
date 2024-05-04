import express from "express";
import { userLogin, userSignUp } from "../controller/userLoginController.js";
import { User } from "../model/User.js";
import validator from "express-joi-validation";
import Joi from "joi";
const router = express.Router();
const validation = validator.createValidator({});

const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(5).max(10).required(),
});

const signUpSchema = Joi.object({
  fullname: Joi.string().min(3).required(),

  email: Joi.string().email().required(),
  password: Joi.string().min(5).max(10).required(),
});
router.route("/api/login").post(validation.body(loginSchema), userLogin);
router.route("/api/register").post(validation.body(signUpSchema), userSignUp);

export default router;
