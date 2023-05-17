import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { FilesService } from './files.service';
import { FilesController } from './files.controller';
import { UsersModule } from 'src/users/users.module';
import { UserEntity } from 'src/users/entities/user.entity';

@Module({
  controllers: [FilesController],
  providers: [FilesService],
  imports: [UsersModule, TypeOrmModule.forFeature([UserEntity])],
})
export class FilesModule {}
