import {
  Controller,
  Get,
  Post,
  Put,
  Req,
  Res,
  Delete,
  Param,
  ParseIntPipe,
  Body,
} from '@nestjs/common'
import { Request, Response } from 'express'
import { UserService } from './user.service'
import { UpdateUserDto } from './dto/updateUser.dto'

@Controller('users')
export class UserController {
  constructor(private readonly UserService: UserService) {}

  @Get('/')
  async getAllUsers(@Res() res: Response) {
    const users = await this.UserService.getAllUsers()
    return res.send({
      status: 'ok',
      data: users,
    })
  }

  @Get('/:id')
  async getUser(@Param('id', ParseIntPipe) id: number, @Res() res: Response) {
    const userData = await this.UserService.getUserData(id)
    return res.send({ status: 'ok', data: userData })
  }

  @Post('/')
  async createUser(@Req() req: Request, @Res() res: Response) {
    await this.UserService.createUser(req.body)
    return res.send({ status: 'ok' })
  }

  @Put('/:id')
  async updateUser(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: UpdateUserDto,
    @Res() res: Response,
  ) {
    await this.UserService.updateUserData(id, body)
    return res.send({ status: 'ok' })
  }

  @Delete('/:id')
  async deleteUser(@Param('id') id: number, @Res() res: Response) {
    await this.UserService.deleteUser(id)
    return res.send({ status: 'ok' })
  }
}
