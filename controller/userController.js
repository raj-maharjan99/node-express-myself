import { userData } from "../db.js";

const getUser = (req, res) => {
  res.send("hello from getuser controller");
};

const updateUser = (req, res) => {
  console.log("the req body is : ", req.body);
  const { name } = req.body;
};

const contactUser = (req, res) => {
  res.send(userData);
};

const deleteUser = (req, res) => {
  res.send(`delete user from id ${req.params.id}`);
};
const detailsUser = (req, res) => {
  res.send(`details  user of id ${req.params.id}`);
};
export { getUser, updateUser, contactUser, deleteUser, detailsUser };
