import { User } from "../model/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
export const userLogin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const existUser = await User.findOne({
      email: email,
    });
    console.log(existUser);
    if (existUser) {
      const pass = bcrypt.compareSync(password, existUser.password);
      if (!pass) {
        return res.status(401).json({
          status: "error",
          message: "username or password doesn't match",
        });
      }

      const token = jwt.sign(
        {
          id: existUser._id,
          isAdmin: existUser.isAdmin,
        },
        "jwtsecret"
      );

      return res.status(201).json({
        status: "successfully Logged In.",
        data: {
          token,
          id: existUser._id,
          isAdmin: existUser.isAdmin,
          email: existUser.email,
          fullname: existUser.fullname,
          // shippingAddresss: existUser.shippingAddresss,
        },
      });
    } else {
      return res.status(401).json({
        status: "error",
        message: "user doesn't  exist",
      });
    }
  } catch (error) {
    return res.status(400).json({
      status: "error",
      message: `${error}`,
    });
  }

  res.status(200).send("userlogin api from controller");
};

export const userSignUp = async (req, res) => {
  const { fullname, email, password } = req.body;
  try {
    const existUser = await User.findOne({
      email: email,
    });
    console.log(existUser);
    if (existUser) {
      return res.status(400).json({
        status: "error",
        message: "user already exist",
      });
    } else {
      const hashPassword = bcrypt.hashSync(password, 10);
      await User.create({
        email,
        password: hashPassword,
        fullname,
      });
      return res.status(201).json({
        status: "success",
        message: "Registered  successfully",
      });
    }
  } catch (error) {
    return res.status(400).json({
      status: "error",
      message: `${error}`,
    });
  }
};
