import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DBService } from './shared';
import { UserModule } from './user/user.module';
import { MainModule } from './main/main.module';
import { AuthModule } from './auth/auth.module';
import { validate, ApiConfigService } from './config';

@Module({
  imports: [
    ConfigModule.forRoot({
      validate,
      cache: true,
      isGlobal: true,
    }),
    UserModule,
    MainModule,
    AuthModule,
  ],
  controllers: [],
  providers: [ApiConfigService, DBService],
})
export class AppModule {}
