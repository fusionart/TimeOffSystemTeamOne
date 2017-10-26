export class registerUserRequest {
    public id: number;
	public username: string;
	public password: string;
	public personalId: string;
	public firstName: string;
	public secondName: string;
	public lastName: string;
	public email: string;
	public address: string;
	public telephone: string;
	public position: string;
	public isAdmin: boolean;
	public ptoAvailable: number;
    public ptoTotal: string;
    constructor(
        id,
        username, 
        password,       
        personalId,
        firstName,
        secondName,
        lastName,
        email,
        address,
        telephone,       
        position,
        isAdmin,
        ptoAvailable,
        ptoTotal
      ) {
        this.id = id;
        this.username = username;  
        this.password = password;        
        this.personalId = personalId;
        this.firstName = firstName;
        this.secondName = secondName;
        this.lastName = lastName;
        this.email = email;
        this.address = address;
        this.telephone = telephone;        
        this.position = position;
        this.isAdmin = false;        
        this.ptoAvailable = 0;
        this.ptoTotal = null;
      }
}