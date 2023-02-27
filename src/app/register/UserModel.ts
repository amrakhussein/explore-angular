export class UserModel {
  constructor(
    public userName: string,
    public email: string,
    public password: string,
    public confirmPassword: string,
    public where: string
  ) {}
}
