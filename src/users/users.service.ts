import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Repository } from 'typeorm';
import { UserEntity } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { badgeCreator } from 'src/common/helpers/badgeCreator';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private repository: Repository<UserEntity>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    return await this.repository.save(createUserDto);
  }

  async findById(id: number) {
    return await this.repository.findOneBy({
      id,
    });
  }

  async findByEmail(email: string) {
    return await this.repository.findOneBy({
      email,
    });
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const newUser = await this.repository.update(id, updateUserDto);
    return newUser;
  }

  async remove(id: number) {
    const user = await this.repository.delete(id);
    return user.affected;
  }

  async createBadge(email: string) {
    const user = await this.findByEmail(email);

    try {
      const userBadge = await badgeCreator(user);
      console.log(userBadge);

      if (userBadge) {
        await this.repository.update(user.id, { pdf: userBadge });
        JSON.stringify(
          {
            status: true,
          },
          null,
          '\t',
        );
      }
    } catch (error) {
      JSON.stringify(
        {
          status: false,
          error: error.message,
        },
        null,
        '\t',
      );
    }
  }

  async getBadge(userId: number) {
    return [];
  }
}
