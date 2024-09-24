export type TypeUser = 'administrador' | 'comum';

export class User {
  name: string;
  email: string;
  password: string;
  age: number;
  type: TypeUser;

  constructor(
    name: string,
    email: string,
    password: string,
    age: number,
    type: TypeUser
  ) {
    this.name = name;
    this.email = email;
    this.password = password;
    this.age = age;
    this.type = type;
  }
}
