export class Comment {
  constructor(
    public comment: string,
    public userId: string,
    public userName: string,
    public createdAt: Date,
    public id?: string) {}
}
