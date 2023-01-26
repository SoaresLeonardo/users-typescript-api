import { Request, Response } from "express";
import { MongoGetUsersRepository } from "../../repositories/get-users/mongo-get-users";
import { GetUsersController } from "./get-users";

export class GetUserController {
  async index(req: Request, res: Response): Promise<void> {
    const mongoGetUsersRepository = new MongoGetUsersRepository();
    const getUsersController = new GetUsersController(mongoGetUsersRepository);

    const { body, statusCode } = await getUsersController.handle();

    res.send(body).status(statusCode);
  }
}

export default new GetUserController();
