import { HttpException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

@Injectable()
export class UserService {
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

  async create(data: any) {
    try {
      const result = await prisma.users.create({
        data,
      });
      return result;
    } catch (exception) {
      throw new HttpException(`Error: ${exception}`, 500);
    }
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
