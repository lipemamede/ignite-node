import { classToClass } from "class-transformer";

import { IUserResponseDTO } from "../dtos/IUserResponseDTO";
import { User } from "../entities/User";

class UserMap {
  static toDTO({
    id,
    name,
    email,
    avatar,
    isAdmin,
  }: User): IUserResponseDTO {
    const user = classToClass({
      id,
      name,
      email,
      avatar,
      isAdmin,
    });
    return user;
  }
}

export { UserMap };
