import {
  Controller,
  Get,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Post,
  Res,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiBearerAuth, ApiBody, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';
import { UserId } from 'src/auth/decorators/userId.decorator';
import { GetBadgeDto } from './dto/get-badge.dto';

@Controller('users')
@ApiTags('users')
@ApiBearerAuth()
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('/me')
  @UseGuards(JwtAuthGuard)
  async getMe(@UserId() id: any) {
    return await this.usersService.findById(+id);
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  async findOne(@Param('id') id: number) {
    return await this.usersService.findById(+id);
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBody({ type: UpdateUserDto })
  async update(@Param('id') id: number, @Body() updateUserDto: UpdateUserDto) {
    return await this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  async remove(@Param('id') id: number) {
    return await this.usersService.remove(+id);
  }

  @Post('/badge')
  @UseGuards(JwtAuthGuard)
  async createBadge(@Body() dto: GetBadgeDto) {
    return await this.usersService.createBadge(dto.email);
  }

  @Get('/badge/:userId')
  @UseGuards(JwtAuthGuard)
  async getBadge(
    @Param('userId') userId: number,
    @Res({ passthrough: true }) res,
  ) {
    const buffer = await this.usersService.getBadge(userId);
    res.set({
      'Content-Type': 'application/pdf',
      'Content-Disposition': 'attachment; filename=example.pdf',
      'Content-Length': buffer.length,
    });

    res.end(buffer);
  }
}
