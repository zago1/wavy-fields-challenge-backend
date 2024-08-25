import { mock, Mock } from 'ts-jest-mocker';
import { IUsersRepository } from '../../repositories/IUsersRepository';
import { UpdateUserNameUseCase } from './UpdateUserNameUseCase';
import { User } from '../../entities/User';

describe('UpdateUserNameUseCase', () => {
  const user: User = new User({
    name: 'User',
    email: 'user@gmail.com',
    password: 'password',
  }, 'user-id');

  let userRepository: Mock<IUsersRepository>;
  let updateUserNameUseCase: UpdateUserNameUseCase;

  beforeEach(() => {
    userRepository = mock<IUsersRepository>();
    updateUserNameUseCase = new UpdateUserNameUseCase(userRepository);
  });

  it('should return User', async () => {
    userRepository.updateName.mockResolvedValueOnce(user);

    const response = await updateUserNameUseCase.execute(user.name, user.id);

    expect(userRepository.updateName).toHaveBeenCalledTimes(1);
    expect(response).toBeInstanceOf(User);
    expect(response).toEqual(user);
  });
});