import { Router } from "express";
import GetUserController from "./controllers/get-users/GetUserController";
import UpdateUserController from "./controllers/update-user/UpdateUserController";

const routes = Router();

routes.get("/users", GetUserController.index);
routes.put("/users/:id", UpdateUserController.index);

export default routes;
