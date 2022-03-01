import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const user = this.usersRepository.findById(user_id);

    if (!user) {
      throw new Error("Mensagem do erro");
    }

    const isUserAdmin = user.admin;

    if (!isUserAdmin) {
      throw new Error("Mensagem do erro");
    }

    const all = this.usersRepository.list();
    return all;
  }
}

export { ListAllUsersUseCase };
