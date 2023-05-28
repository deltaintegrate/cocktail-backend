import { HttpException, Injectable } from '@nestjs/common';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { compare, hash } from 'bcrypt';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../users/models/user.entity';
import { Repository } from 'typeorm';
import { LoginAuthDto } from '../users/dto/login-auth.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
    private jwtService: JwtService,
  ) {}

  async register(userObject: CreateUserDto) {
    const { password, email, phone } = userObject;

    const findUser = await this.usersRepository.findOne({
      where: [{ phone: phone }, { email: email }],
    });

    if (findUser)
      throw new HttpException('USER_PHONE_EMAIL_ALREADY_EXIST', 404);

    const passToHash = await hash(password, 10);
    userObject = { ...userObject, password: passToHash };
    return this.usersRepository.save(userObject);
  }

  async login(userObjectLogin: LoginAuthDto) {
    const { email, password } = userObjectLogin;
    const findUser = await this.usersRepository.findOne({
      where: { email: email },
    });
    if (!findUser) throw new HttpException('USER_NOT_FOUND', 404);

    const checkPassword = await compare(password, findUser.password);

    if (!checkPassword) throw new HttpException('PASSWORD_INCORRECT', 403);

    const payload = { id: findUser.id, name: findUser.full_name };
    const token = await this.jwtService.signAsync(payload);

    const data = {
      user: findUser,
      token: token,
    };

    return data;
  }
}
