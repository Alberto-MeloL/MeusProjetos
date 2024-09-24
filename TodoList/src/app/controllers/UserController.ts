import {User} from "../models/User";
import {TypeUser} from "../models/User";
// import bcrypt from "bcrypt";

class UserController{
    register(name:string, email:string, password: string, age: number, type:TypeUser){

      // const hashedPassword =bcrypt.h
      const user = new User(name, email, password, age, type);

      // realizar a persistencia dos dados
      return user;
    }

    login(email: string, password: string){}
}
