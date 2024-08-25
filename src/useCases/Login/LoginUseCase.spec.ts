import { mock, Mock } from "ts-jest-mocker";
import { User } from "../../entities/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { LoginUseCase } from "./LoginUseCase";

describe('LoginUseCase', () => {
  const user: User = new User({
    name: 'User Test',
    email: 'user.test@gmail.com',
    password: 'password'
  }, 'user-id');

  let userRepository: Mock<IUsersRepository>;
  let createUserUseCase: LoginUseCase;

  beforeEach(() => {
    userRepository = mock<IUsersRepository>();
    createUserUseCase = new LoginUseCase(userRepository);
  });

  it('should login return User', async () => {
    userRepository.login.mockResolvedValueOnce(user);

    const response = await createUserUseCase.execute(user.email, user.password ?? '');

    expect(userRepository.login).toHaveBeenCalledTimes(1);
    expect(response).toBeInstanceOf(User);
    expect(response).toEqual(user);
  });
  
});