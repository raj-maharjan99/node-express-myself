import express from "express";

import {
  contactUser,
  deleteUser,
  detailsUser,
  getUser,
  updateUser,
} from "../controller/userController.js";

const router = express.Router();

router.route("/api/user").get(getUser).post(updateUser).patch(contactUser);
router.route("/api/user/:id").get(detailsUser).delete(deleteUser);

export default router;
