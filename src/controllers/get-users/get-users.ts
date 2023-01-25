import { IGetUsersController, IGetUsersRepository } from "./protocol";

export class GetUsersController implements IGetUsersController {
  constructor(private getUsersRepository: IGetUsersRepository) {}

  async handle() {
    try {
      // validar requisição
      // direcionar chamada para o Repositer
      const users = await this.getUsersRepository.getUsers();

      return {
        statusCode: 200,
        body: users,
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: "something went wrong",
      };
    }
  }
}
