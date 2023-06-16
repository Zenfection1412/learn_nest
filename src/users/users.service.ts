import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}
  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }

  findAll() {
    const result = this.prisma.users.findMany();
    return result;
  }

  findOne(id: string) {
    const result = this.prisma.users.findUnique({
      where: {
        id: id,
      },
    });
    if (!result) {
      throw new NotFoundException('No user found');
    }
    return result;
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: string) {
    return `This action removes a #${id} user`;
  }
}
