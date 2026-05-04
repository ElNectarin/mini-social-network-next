/* eslint-disable prettier/prettier */
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto } from '../dto/create-user.dto';
import { InjectModel } from '@nestjs/sequelize';
import { User } from '../entity/users.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User)
    private userModel: typeof User,
  ) {}

  async createUser(createUserDto: Partial<CreateUserDto>): Promise<User> {
    const existingUser = await this.userModel.findOne({
      where: {
        email: createUserDto.email!,
      },
    });

    if (existingUser) {
      throw new HttpException(
        'Пользователь с таким email уже существует!',
        HttpStatus.BAD_REQUEST,
      );
    }

    const cryptedPass = await bcrypt.hash(
      createUserDto.password!,
      process.env.HASH_CRYPT ? parseInt(process.env.HASH_CRYPT, 10) : 10,
    );
    const userData = {
      ...createUserDto,
      password: cryptedPass,
    };

    const user = await this.userModel.create(userData as any);
    return user;
  }
}
