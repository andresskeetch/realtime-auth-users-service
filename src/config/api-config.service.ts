import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Environment, EnvironmentVariables } from './interface/variables';

@Injectable()
export class ApiConfigService {
  constructor(private configService: ConfigService<EnvironmentVariables>) {}

  get isDev(): boolean {
    return (
      this.configService.get<string>('NODE_ENV') === Environment.Development
    );
  }

  get port(): number {
    return this.configService.get<number>('PORT');
  }
}
