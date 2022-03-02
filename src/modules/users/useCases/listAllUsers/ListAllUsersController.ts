import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    const { user_id } = request.headers;
    let id;

    if (user_id) id = user_id.toString();
    else id = "";

    try {
      const all = this.listAllUsersUseCase.execute({ user_id: id });
      return response.json(all);
    } catch (error) {
      return response.status(400).json({
        error:
          "Você precisa ser um adminstrador para listar todos os usuários.",
      });
    }
  }
}

export { ListAllUsersController };
