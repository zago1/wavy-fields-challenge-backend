import { mock, Mock } from 'ts-jest-mocker';
import { ITasksRepository } from '../../repositories/ITasksRepository';
import { CreateTaskUseCase } from './CreateTaskUseCase';
import { Task } from '../../entities/Task';

describe('CreateTaskUseCase', () => {
  const task: Task = new Task({
    text: 'Test Task',
    userId: 'user-id',
    done: false,
    createdAt: new Date(),
  }, 'task-id');

  let taskRepository: Mock<ITasksRepository>;
  let createTaskUseCase: CreateTaskUseCase;

  beforeEach(() => {
    taskRepository = mock<ITasksRepository>();
    createTaskUseCase = new CreateTaskUseCase(taskRepository);
  });

  it('should return return Task', async () => {
    taskRepository.create.mockResolvedValueOnce(
      new Promise((resolve) => resolve(task))
    );

    const response = await createTaskUseCase.execute(task.text, task.userId);

    expect(taskRepository.create).toHaveBeenCalledTimes(1);
    expect(response).toBeInstanceOf(Task);
    expect(response).toEqual(task);
  });
});