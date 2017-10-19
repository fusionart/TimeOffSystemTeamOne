export class User {
  public id: number;
  public personId: string;
  public firstName: string;
  public secondName: string;
  public lastName: string;
  public isAdmin: boolean;
  public username: string;
  public password: string;
  public position: string;
  public email: string;
  public availablePTO: number;
  public allPTO: number;
  constructor(
    id,
    personId,
    firstName,
    secondName,
    lastName,
    isAdmin,
    username,
    password,
    position,
    email,
    availablePTO,
    allPTO
  ) {
    this.id = id;
    this.personId = personId
    this.firstName = firstName;
    this.secondName = secondName;
    this.lastName = lastName;
    this.isAdmin = isAdmin;
    this.username = username;
    this.password = password;
    this.position = position;
    this.email = email;
    this.availablePTO = availablePTO;
    this.allPTO = allPTO;
  }
}
