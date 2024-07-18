export class User {
    name: string;
    username: string;
    email: string;
    mobile: string;
    address: string;
    password: string;
  
    constructor(name: string, username: string, email: string, mobile: string, address: string, password: string) {
      this.name = name;
      this.username = username;
      this.email = email;
      this.mobile = mobile;
      this.address = address;
      this.password = password;
    }
  }
  