import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({
    default: 'John',
  })
  firstName: string;

  @ApiProperty({
    default: 'Doe',
  })
  lastName: string;

  @ApiProperty({
    default: 'user@test.com',
  })
  email: string;

  @ApiProperty({
    default: '12345',
  })
  password: string;
}
