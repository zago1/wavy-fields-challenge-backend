import { mockReset } from 'jest-mock-extended';

import { PrismaMock } from '../../../prisma/prisma-mock';
import { User } from '../../../entities/User';
import { IUsersRepository } from '../../IUsersRepository';

import { PostgresUserRepository } from '.';
import { UserNotFoundError } from '../../../utils/errors/UserNotFoundError';
import { EmailAlreadyExistsError } from '../../../utils/errors/EmailAlreadyExistsError';
import { InvalidPasswordError } from '../../../utils/errors/InvalidPasswordError';

describe('PostgresUserRepository', () => {
  const name = 'User';
  const password = 'Password';
  const email = 'user@gmail.com';
  const id = 'user-id';

  let userRepository: IUsersRepository;

  beforeEach(() => {
    mockReset(PrismaMock);
    userRepository = new PostgresUserRepository(PrismaMock);
  });

  it('should create user', async () => {
    PrismaMock.user.create.mockResolvedValue({
      id,
      email,
      name,
      password,
    });

    const result = await userRepository.create(name, email, password);

    expect(result).toBeInstanceOf(User);
  });

  it('should create user return exception on email duplicated', async () => {
    PrismaMock.user.findFirst.mockResolvedValue({
      id,
      name,
      email,
      password
    });

    try {
      await userRepository.create(name, email, password);
    } catch (error) {
      expect(error).toBeInstanceOf(EmailAlreadyExistsError);
    }

  });

  it('should update name return User', async () => {
    PrismaMock.user.update.mockResolvedValue({
      id,
      email,
      name,
      password,
    });

    const result = await userRepository.updateName(name, id);

    expect(result).toBeInstanceOf(User);
  });

  it('should update password return undefined', async () => {
    PrismaMock.user.findFirst.mockResolvedValue({
      id, name, email, password
    });
    PrismaMock.user.update.mockResolvedValue({
      id, email, name, password,
    });

    const result = await userRepository.updatePassword(password, 'New Password', id);

    expect(result).toEqual(undefined);
  });

  it('should update password return expection on oldPassword wrong', async () => {
    PrismaMock.user.findFirst.mockResolvedValue(null);

    try {
      await userRepository.updatePassword('oldPassword', 'newPassword', id);
    } catch (error) {
      expect(error).toBeInstanceOf(InvalidPasswordError);
    }
  })

  it('should login return User', async () => {
    PrismaMock.user.findFirst.mockResolvedValue({
      id,
      name,
      email,
      password
    });

    const result = await userRepository.login(email, password);

    expect(result).toBeInstanceOf(User);
  });

  it('should wrong email or password return an exception', async () => {
    PrismaMock.user.findFirst.mockResolvedValue(null);

    try {
      await userRepository.login(email, password);
    } catch (error) {
      expect(error).toBeInstanceOf(UserNotFoundError);
    }
  });

});