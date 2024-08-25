import { mockReset } from 'jest-mock-extended';
import { ITasksRepository } from "../../ITasksRepository";
import { PrismaMock } from '../../../prisma/prisma-mock';
import { PostgresTaskRepository } from '.';
import { Task } from '../../../entities/Task';

describe('PostgresTaskRepository', () => {
  const taskID = 'task-id';
  const createdAt = new Date();
  const done = false;
  const text = 'Test Task Name';
  const userId = 'user-id';

  const tasks: Task[] = [
    { id: '1', createdAt, text, done, userId },
    { id: '2', createdAt, text, done, userId },
    { id: '3', createdAt, text, done, userId },
    { id: '4', createdAt, text, done, userId },
  ];

  let taskRepository: ITasksRepository;

  beforeEach(() => {
    mockReset(PrismaMock);
    taskRepository = new PostgresTaskRepository(PrismaMock);
  });

  it('should create task', async () => {
    PrismaMock.task.create.mockResolvedValue(new Task({
      done,
      text,
      userId,
      createdAt,
    }, taskID));

    const result = await taskRepository.create(text, userId);

    expect(result).toBeInstanceOf(Task);
  });

  it('should update return task', async () => {
    const newText = 'New Text';
    PrismaMock.task.update.mockResolvedValue(new Task({
      text: newText,
      createdAt,
      userId,
      done: true
    }, taskID));

    const result = await taskRepository.update(taskID, newText, true);

    expect(result).toBeInstanceOf(Task);
  });

  it('should listAllByUser return data as Task array', async () => {
    PrismaMock.task.findMany.mockResolvedValue(tasks);

    const result = await taskRepository.listByUser(userId, 0, 4);

    expect(result.data).toBeInstanceOf(Array<Task>);
  });

  it('should listAllByUser return metadata', async () => {
    PrismaMock.task.count.mockResolvedValue(4);

    const result = await taskRepository.listByUser(userId, 0, 4);

    expect(result.metadata.totalRegisters).toEqual(4);
  });

});