import { Request, Response } from "express";
import { MongoUpdateUserRepository } from "../../repositories/update-user/mongo-update-user";
import { UpdateUserController } from "./update-user";

export class UpdateUsersController {
  async index(req: Request, res: Response): Promise<void> {
    const mongoUpdateUserRepository = new MongoUpdateUserRepository();

    const updateuserController = new UpdateUserController(
      mongoUpdateUserRepository
    );

    const { body, statusCode } = await updateuserController.handle({
      body: req.body,
      params: req.params,
    });

    res.status(statusCode).send(body);
  }
}

export default new UpdateUsersController();
