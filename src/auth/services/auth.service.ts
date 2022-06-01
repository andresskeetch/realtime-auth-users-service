import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { passwordMatch } from 'src/shared';
import { DBService } from 'src/shared/services/db.service';
import { TokenPayload } from '../interface/token.interface';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService, private dbService: DBService) {}
  async login(username: string, password: string) {
    const user = await this.dbService.user.findUnique({
      where: {
        email: username,
      },
    });

    if (!user) {
      throw new UnauthorizedException('User not found');
    }

    const isPasswordMatch = await passwordMatch(password, user.hashPassword);

    if (!isPasswordMatch) {
      throw new UnauthorizedException();
    }

    const payload: TokenPayload = { username: username, sub: user.id };

    return {
      user: payload,
      access_token: this.jwtService.sign(payload),
    };
  }
}
