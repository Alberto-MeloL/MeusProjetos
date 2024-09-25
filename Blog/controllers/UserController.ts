import { User } from '../models/User';
import { TypeUser } from '../models/User';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import pool from '../config/database';

// jwt ao lado do serve/client
class UserController {
  async register(
    name: string,
    email: string,
    password: string,
    age: number,
    type: TypeUser
  ) {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    const user = new User(name, email, hashedPassword, age, type);

    // realizar a persistencia dos dados
    return user;
  }

  async login(email: string, password: string): Promise<string> {
    const validationLengthEmail = /^(?=.{5,})[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const validationLengthPassword =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[\w@$*&#!]{8,}$/;

    try {
      if (
        !validationLengthEmail.test(email) ||
        !validationLengthPassword.test(password)
      ) {
        return 'Email ou Senha inválidos.';
      }

      const query = 'SELECT email, password FROM user WHERE email = $1';

      const client = await pool.query(query, [email]);

      if (client.rows.length > 0) {
        const user = await client.rows[0];

        const validPassword = await bcrypt.compare(password, user.password);


        if (validPassword) {
          const tokenData = {
            userId: user.id,
            email: user.email,
          };

          // const token = jwt
        }
      }

      return 'Login realizado com sucesso.';
    } catch (err) {
      throw new Error('Credenciais inválidas' + err);
    }
  }
}
