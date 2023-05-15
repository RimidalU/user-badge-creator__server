import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from 'src/users/entities/user.entity';
import { Repository } from 'typeorm';
import { join } from 'path';
import { unlink } from 'fs';
import { promisify } from 'util';
import { error } from 'console';

const unlinkAsync = promisify(unlink);

@Injectable()
export class FilesService {
  constructor(
    @InjectRepository(UserEntity)
    private repository: Repository<UserEntity>,
  ) {}

  async addFile(id: number, file: Express.Multer.File) {
    const newUser = await this.repository.update(id, { image: file.filename });
    return newUser;
  }

  async remove(path: string) {
    const filePath = join(__dirname, '..', path);
    await unlinkAsync(filePath);
    // await unlink(filePath, error);
  }
}
