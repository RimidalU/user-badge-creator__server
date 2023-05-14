import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { LoginUserDto } from './dto/login.user.dto';
import { CreateUserDto } from 'src/users/dto/create-user.dto';

@Controller('auth')
@ApiTags('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/signup')
  @ApiBody({ type: CreateUserDto })
  signup(@Body() dto: CreateUserDto): Promise<CreateUserDto> {
    return this.authService.signup(dto);
  }

  @Post('/login')
  @ApiBody({ type: LoginUserDto })
  login(@Body() dto: LoginUserDto): Promise<any> {
    return this.authService.login(dto);
  }
}
