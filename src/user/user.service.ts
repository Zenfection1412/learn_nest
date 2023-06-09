import { HttpException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    try {
      const users = await prisma.users.findMany();
      return users;
    } catch (exception) {
      throw new HttpException(`Error: ${exception}`, 500);
    }
  }

  async findOne(id: string) {
    try {
      const user = await prisma.users.findUnique({
        where: {
          id: id,
        },
      });
      return user;
    } catch (exception) {
      throw new NotFoundException(`User #${id} not found`);
    }
  }

  async createUser(data: Prisma.UserCreateInput): Promise<User> {
    return this.prisma.user.create({
      data,
    });
  }

  async update(id: string, data: any) {
    try {
      const result = await prisma.users.update({
        where: {
          id: id,
        },
        data,
      });
      return result;
    } catch (exception) {
      throw new HttpException(`Error: ${exception}`, 500);
    }
  }

  async remove(id: string) {
    try {
      const result = await prisma.users.delete({
        where: {
          id: id,
        },
      });
      return result;
    } catch (exception) {
      throw new HttpException(`Error: ${exception}`, 500);
    }
  }
}
