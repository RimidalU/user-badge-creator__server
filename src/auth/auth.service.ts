import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { LoginUserDto } from './dto/login.user.dto';
import { UsersService } from 'src/users/users.service';
import { AppError } from 'src/common/constants/errors';
import { JwtService } from '@nestjs/jwt';
import { ValidationResponse } from './dto/validation.response ';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async signup(dto: CreateUserDto): Promise<ValidationResponse> {
    const existUser = await this.usersService.findByEmail(dto.email);
    if (existUser) throw new BadRequestException(AppError.USER_EXIST);

    const userData = await this.usersService.create(dto);

    return {
      token: this.jwtService.sign({ userId: userData.id }),
    };
  }

  async login(dto: LoginUserDto): Promise<ValidationResponse> {
    const existUser = await this.usersService.findByEmail(dto.email);
    if (!existUser) {
      throw new BadRequestException(AppError.USER_NOT_EXIST);
    }

    const isValidatePassword = (await dto.password) === existUser.password;

    if (!isValidatePassword) {
      throw new BadRequestException(AppError.USER_NOT_EXIST);
    }

    return {
      token: this.jwtService.sign({ userId: existUser.id }),
    };
  }
}
