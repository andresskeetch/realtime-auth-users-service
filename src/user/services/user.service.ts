import { BadRequestException, Injectable } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { DBService, hash } from 'src/shared';
import { CreateUserDto } from '../dtos/create-user.dto';
import { ResponseUserDto } from '../dtos/response-user.dto';

@Injectable()
export class UserService {
  constructor(private dbService: DBService) {}

  async create(user: CreateUserDto) {
    const userValidate = await this.dbService.user.findUnique({
      where: {
        email: user.email,
      },
    });

    if (userValidate) {
      throw new BadRequestException('Account with this email already exists.');
    }

    const userCreated = await this.dbService.user.create({
      data: {
        email: user.email,
        name: user.name,
        hashPassword: await hash(user.password),
      },
    });

    return plainToClass(ResponseUserDto, userCreated);
  }
}
