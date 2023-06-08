import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { User } from './user.model';
const prisma = new PrismaClient();

@Injectable()
export class UserService {
  async findAll() {
    return await prisma.users.findMany();
  }

  async findOne(id: string) {
    return await prisma.users.findUnique({
      where: {
        id: id,
      },
    });
  }

  async create(data: User) {
    return await prisma.users.create({
      data,
    });
  }

  async update(id: string, data: User) {
    return await prisma.users.update({
      where: {
        id: id,
      },
      data,
    });
  }

  async remove(id: string) {
    return await prisma.users.delete({
      where: {
        id: id,
      },
    });
  }
}
