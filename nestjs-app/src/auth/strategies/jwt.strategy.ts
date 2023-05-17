import { UsersService } from 'src/users/users.service';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AppError } from 'src/common/constants/errors';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly usersService: UsersService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.SECRET_KEY,
    });
  }

  async validate(payload: { userId: string }) {
    const user = await this.usersService.findById(+payload.userId);
    if (!user) {
      throw new UnauthorizedException(AppError.USER_DONT_HAVE_ACCESS);
    }

    return user;
  }
}
