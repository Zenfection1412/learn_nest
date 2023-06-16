import { HttpException, Injectable, NotFoundException } from '@nestjs/common';
import { users, Prisma } from '@prisma/client';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async users(params: {
    skip?: number;
    take?: number;
    // cursor?: Prisma.usersWhereUniqueInput;
    // where?: Prisma.usersWhereInput;
    // orderBy?: Prisma.usersOrderByWithRelationInput;
  }): Promise<users[]> {
    // const { skip, take, cursor, where, orderBy } = params;
    const { skip, take } = params;
    const result = await this.prisma.users.findMany({
      skip,
      take,
      // cursor,
      // where,
      // orderBy,
    });
    if (result.length == 0) {
      throw new NotFoundException('No users found');
    }
    return result;
  }

  async user(where: Prisma.usersWhereUniqueInput): Promise<users> {
    const result = await this.prisma.users.findUnique({
      where,
    });
    if (!result) {
      throw new NotFoundException('No user found');
    }
    return result;
  }

  async createUser(data: Prisma.usersCreateInput): Promise<users> {
    try {
      const result = await this.prisma.users.create({
        data,
      });
      return result;
    } catch (e) {
      if (e.code == 'P2002') {
        throw new HttpException('There is a unique constraint violation', 400);
      }
      throw new HttpException(e, 400);
    }
  }

  async updateUser(params: {
    where: Prisma.usersWhereUniqueInput;
    data: Prisma.usersUpdateInput;
  }): Promise<users> {
    const { where, data } = params;
    try {
      return await this.prisma.users.update({
        data,
        where,
      });
    } catch (error) {
      throw new NotFoundException("This user doesn't exist");
    }
  }

  async deleteUser(where: Prisma.usersWhereUniqueInput): Promise<users> {
    try {
      return await this.prisma.users.delete({
        where,
      });
    } catch (error) {
      throw new NotFoundException("This user doesn't exist");
    }
  }
}
