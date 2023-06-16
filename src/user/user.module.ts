import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { PrismaService } from 'nestjs-prisma';
import { PrismaModule } from 'nestjs-prisma';

@Module({
  controllers: [UserController],
  providers: [UserService],
  imports: [PrismaModule],
})
export class UserModule {}
