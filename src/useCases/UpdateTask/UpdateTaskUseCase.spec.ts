import { mock, Mock } from 'ts-jest-mocker';
import { ITasksRepository } from '../../repositories/ITasksRepository';
import { UpdateTaskUseCase } from './UpdateTaskUseCase';
import { Task } from '../../entities/Task';

describe('UpdateTaskUseCase', () => {
  const task: Task = new Task({
    text: 'Test Task',
    userId: 'user-id',
    done: true,
    createdAt: new Date(),
  }, 'task-id');

  let taskRepository: Mock<ITasksRepository>;
  let updateTaskUseCase: UpdateTaskUseCase;

  beforeEach(() => {
    taskRepository = mock<ITasksRepository>();
    updateTaskUseCase = new UpdateTaskUseCase(taskRepository);
  });

  it('should return Task', async () => {
    taskRepository.update.mockResolvedValueOnce(
      new Promise((resolve) => resolve(task))
    );

    const response = await updateTaskUseCase.execute(task.id, task.text, task.done);

    expect(taskRepository.update).toHaveBeenCalledTimes(1);
    expect(response).toBeInstanceOf(Task);
    expect(response).toEqual(task);
  });
});