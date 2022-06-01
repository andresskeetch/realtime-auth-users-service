import { Module } from '@nestjs/common';
import { DBService } from 'src/shared';
import { UserController } from './controllers/user.controller';
import { UserService } from './services/user.service';

@Module({
  controllers: [UserController],
  providers: [UserService, DBService],
})
export class UserModule {}
