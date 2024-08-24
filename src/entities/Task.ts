export class Task {
  public readonly id: string;

  public text: string;
  public userId: string;
  public done: boolean;
  public createdAt: Date;

  constructor(props: Omit<Task, 'id'>, id?: string) {
    Object.assign(this, props);

    if (!!id) {
      this.id = id;
    }
  }
}