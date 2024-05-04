import { User } from "../model/User.js";
import bcrypt from "bcrypt";
export const userLogin = (req, res) => {
  console.log(req.body);

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
