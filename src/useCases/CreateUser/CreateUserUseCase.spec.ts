import { mock, Mock } from 'ts-jest-mocker';
import { CreateUserUseCase } from './CreateUserUseCase';
import { IUsersRepository } from '../../repositories/IUsersRepository';
import { User } from '../../entities/User';

describe('CreateUserUseCase', () => {
  const user: User = new User({
    name: 'User Test',
    email: 'user.test@gmail.com',
    password: 'password'
  }, 'user-id');

  let userRepository: Mock<IUsersRepository>;
  let createUserUseCase: CreateUserUseCase;

  beforeEach(() => {
    userRepository = mock<IUsersRepository>();
    createUserUseCase = new CreateUserUseCase(userRepository);
  });

  it('should return return User', async () => {
    userRepository.create.mockResolvedValueOnce(user);

    const response = await createUserUseCase.execute(user.name, user.email, user.password ?? '');

    expect(userRepository.create).toHaveBeenCalledTimes(1);
    expect(response).toBeInstanceOf(User);
    expect(response).toEqual(user);
  });
});