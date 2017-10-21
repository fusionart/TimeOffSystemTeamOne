export class User {
  public id: number;
  public personalId: string;
  public firstName: string;
  public secondName: string;
  public lastName: string;
  public isAdmin: boolean;
  public username: string;
  public password: string;
  public position: string;
  public email: string;
  public ptoAvailable: number;
  public ptoTotal: number;
  constructor(
    id,
    personalId,
    firstName,
    secondName,
    lastName,
    isAdmin,
    username,
    password,
    position,
    email,
    ptoAvailable,
    ptoTotal
  ) {
    this.id = id;
    this.personalId = personalId;
    this.firstName = firstName;
    this.secondName = secondName;
    this.lastName = lastName;
    this.isAdmin = isAdmin;
    this.username = username;
    this.password = password;
    this.position = position;
    this.email = email;
    this.ptoAvailable = ptoAvailable;
    this.ptoTotal = ptoTotal;
  }
}
