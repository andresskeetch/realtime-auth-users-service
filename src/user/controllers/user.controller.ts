import { Body, Controller, Post } from '@nestjs/common';

import { CreateUserDto } from '../dtos/create-user.dto';
import { UserService } from '../services/user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}
  @Post('create')
  create(@Body() user: CreateUserDto) {
    return this.userService.create(user);
  }
}
