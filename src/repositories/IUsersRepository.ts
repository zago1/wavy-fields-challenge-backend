import { User } from "../entities/User";

export interface IUsersRepository {
  create(name: string, email: string, password: string): Promise<User>;
  login(email: string, password: string): Promise<User>;
  updateName(name: string, id: string): Promise<User>;
  delete(id: string): Promise<void>;
  updatePassword(oldPassword: string, newPassword: string, id: string): Promise<void>;
}