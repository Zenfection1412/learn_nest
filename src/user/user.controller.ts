import { UpdateUserDto } from './dto/update-user.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { UserService } from './user.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { PaginationQueryDto } from 'src/common/dto/pagination-query.dto/pagination-query.dto';
import { Public } from 'src/common/decorators/public.decorator/public.decorator';
import { ApiForbiddenResponse } from '@nestjs/swagger';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @ApiForbiddenResponse({ description: 'Forbidden.' })
  @Public()
  @Get()
  findAll(@Query() paginationQuery: PaginationQueryDto) {
    return this.userService.users(paginationQuery);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.user({ id: String(id) });
  }

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.createUser(createUserDto);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.updateUser({
      where: { id: String(id) },
      data: updateUserDto,
    });
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.deleteUser({ id: String(id) });
  }
}
