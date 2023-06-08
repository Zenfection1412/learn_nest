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

@Controller('user')
export class UserController {
  constructor(private readonly UserService: UserService) {}

  @Get()
  findAll(@Query() paginationQuery) {
    // const { limit, offset } = paginationQuery;
    return this.UserService.findAll();
    // return `This action returns all users with limit: ${limit} and offset: ${offset}`;
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.UserService.findOne(id);
  }

  @Post('create')
  create(@Body('name') body) {
    return this.UserService.create(body);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body) {
    return this.UserService.update(id, body);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.UserService.remove(id);
  }
}
