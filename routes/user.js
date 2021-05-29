const express = require("express");
const Controller = require("../Controller/process");
const route = express.Router();

route.post("/create_user", Controller.CreateUser);

route.get("/users", Controller.GetUsers);

route.get("/user/:id", Controller.GetSomeUser);

route.put("/user/update/:id", Controller.UpdateUser);

route.delete("/user/delete/:id", Controller.DeleteUser);

module.exports = route;
