import {
  Controller,
  Get,
  Post,
  Put,
  Patch,
  Req,
  Res,
  Delete,
  Param,
  ParseIntPipe,
  Body,
} from '@nestjs/common'
import { Request, Response } from 'express'
import { UserService } from './user.service'

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
    @Body() body: any,
    @Res() res: Response,
  ) {
    await this.UserService.updateUserData(id, body)
    // update user
    return res.send({ status: 'ok' })
  }

  @Patch('/:id')
  async updateUserField(@Req() req: Request, @Res() res: Response) {
    // updateUserField
  }

  @Delete('/:id')
  async deleteUser(@Req() req: Request, @Res() res: Response) {
    // get user
  }
}
