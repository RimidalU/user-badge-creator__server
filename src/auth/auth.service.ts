import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { LoginUserDto } from './dto/login.user.dto';
import { UsersService } from 'src/users/users.service';
import { AppError } from 'src/common/constants/errors';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  async signup(dto: CreateUserDto): Promise<CreateUserDto> {
    const existUser = await this.usersService.findByEmail(dto.email);
    if (existUser) throw new BadRequestException(AppError.USER_EXIST);

    return this.usersService.create(dto);
  }

  async login(dto: LoginUserDto): Promise<any> {
    const existUser = await this.usersService.findByEmail(dto.email);
    if (!existUser) {
      throw new BadRequestException(AppError.USER_NOT_EXIST);
    }

    const isValidatePassword = (await dto.password) === existUser.password;

    if (!isValidatePassword) {
      throw new BadRequestException(AppError.USER_NOT_EXIST);
    }

    const { password, ...result } = existUser;
    return result;
  }
}
