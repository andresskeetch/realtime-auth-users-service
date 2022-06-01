import { Controller, Get } from '@nestjs/common';

@Controller()
export class MainController {
  @Get()
  main() {
    return 'microservice auth is running';
  }
}
