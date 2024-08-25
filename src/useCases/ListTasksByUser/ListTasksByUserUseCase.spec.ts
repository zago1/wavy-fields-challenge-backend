import { mock, Mock } from "ts-jest-mocker";
import { Task } from "../../entities/Task";
import { ITasksRepository } from "../../repositories/ITasksRepository";
import { ListTasksByUserUseCase } from "./ListTasksByUserUseCase";

describe('ListTasksByUserUseCase', () => {
  const tasks: Task[] = [
    {
      id: 'task-1', text: 'Test Task',
      userId: 'user-id', done: false, createdAt: new Date(),
    },
    {
      id: 'task-2', text: 'Test Task',
      userId: 'user-id', done: false, createdAt: new Date(),
    },
    {
      id: 'task-3', text: 'Test Task',
      userId: 'user-id', done: false, createdAt: new Date(),
    },
    {
      id: 'task-4', text: 'Test Task',
      userId: 'user-id', done: false, createdAt: new Date(),
    },
  ];

  let taskRepository: Mock<ITasksRepository>;
  let listTasksByUserUseCase: ListTasksByUserUseCase;

  beforeEach(() => {
    taskRepository = mock<ITasksRepository>();
    listTasksByUserUseCase = new ListTasksByUserUseCase(taskRepository);
  });

  it('should return ListTasksByUserUseCaseResponse', async () => {
    taskRepository.listByUser.mockResolvedValue({
      metadata: { totalRegisters: 4 }, data: tasks,
    });

    const response = await listTasksByUserUseCase.execute('user-id', 1, 4);

    expect(taskRepository.listByUser).toHaveBeenCalledTimes(1);
    expect(response).toEqual({
      metadata: {
        page: 1,
        rows: 4,
        totalRegisters: 4
      },
      data: tasks
    });
  });
})