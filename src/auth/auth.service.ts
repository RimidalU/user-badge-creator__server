import { Injectable } from '@nestjs/common';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { LoginUserDto } from './dto/login.user.dto';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  async signup(dto: CreateUserDto): Promise<CreateUserDto> {
    return;
  }

  async login(dto: LoginUserDto): Promise<any> {
    return;
  }
}
