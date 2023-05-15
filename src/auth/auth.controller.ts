import { Controller, Post, Body, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { LoginUserDto } from './dto/login.user.dto';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { ValidationResponse } from './dto/validation.response ';
import { LocalAuthGuard } from './guards/local.guard';

@Controller('auth')
@ApiTags('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/signup')
  @ApiBody({ type: CreateUserDto })
  signup(@Body() dto: CreateUserDto): Promise<ValidationResponse> {
    return this.authService.signup(dto);
  }

  @UseGuards(LocalAuthGuard)
  @Post('/login')
  @ApiBody({ type: LoginUserDto })
  async login(@Body() dto: LoginUserDto): Promise<ValidationResponse> {
    return this.authService.login(dto);
  }
}
