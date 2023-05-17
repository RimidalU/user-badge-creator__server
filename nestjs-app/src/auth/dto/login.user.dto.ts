import { ApiProperty } from '@nestjs/swagger';

export class LoginUserDto {
  @ApiProperty({
    default: 'user@test.com',
  })
  email: string;

  @ApiProperty({
    default: '12345',
  })
  password: string;
}
