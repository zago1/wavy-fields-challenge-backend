export class User {
  public readonly id: string;

  public name: string;
  public email: string;
  public password: string | undefined;

  constructor(props: Omit<User, 'id'>, id?: string) {
    Object.assign(this, props);

    if (!!id) {
      this.id = id;
    }
  }
}