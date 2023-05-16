import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  @ApiProperty({
    default: 'John',
  })
  firstName: string;

  @ApiProperty({
    default: 'Doe',
  })
  lastName: string;

  @ApiProperty({
    default: '12345',
  })
  password: string;

  pdf: Buffer;
}
