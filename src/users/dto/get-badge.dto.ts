import { ApiProperty } from '@nestjs/swagger';

export class GetBadgeDto {
  @ApiProperty({
    default: 'user@test.com',
  })
  email: string;
}
