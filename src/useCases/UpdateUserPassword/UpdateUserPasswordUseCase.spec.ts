import { mock, Mock } from 'ts-jest-mocker';
import { IUsersRepository } from '../../repositories/IUsersRepository';
import { UpdateUserPasswordUseCase } from './UpdateUserPasswordUseCase';
import { User } from '../../entities/User';

describe('UpdateUserPasswordUseCase', () => {
  const user: User = new User({
    name: 'User',
    email: 'user@gmail.com',
    password: 'password',
  }, 'user-id');

  let userRepository: Mock<IUsersRepository>;
  let updateUserPasswordUseCase: UpdateUserPasswordUseCase;

  beforeEach(() => {
    userRepository = mock<IUsersRepository>();
    updateUserPasswordUseCase = new UpdateUserPasswordUseCase(userRepository);
  });

  it('should return undefined', async () => {
    userRepository.updatePassword.mockResolvedValueOnce();

    const response = await updateUserPasswordUseCase.execute(user.password ?? '', 'newPassword', user.id);

    expect(userRepository.updatePassword).toHaveBeenCalledTimes(1);
    expect(response).toEqual(undefined);
  });
});