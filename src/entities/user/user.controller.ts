import {
  Controller,
  Get,
  Post,
  Put,
  Patch,
  Req,
  Res,
  Delete,
  UseInterceptors,
} from '@nestjs/common'
import { FileInterceptor } from '@nestjs/platform-express'
import { Request, Response } from 'express'

@Controller('users')
export class UserController {
  constructor() {
    //   private readonly userService: UserService
  }

  @Get('/')
  async getAllUsers(@Req() req: Request, @Res() res: Response) {
    // get all users
  }

  @Get('/:id')
  async getUser(@Req() req: Request, @Res() res: Response) {
    // get user
  }

  @Post('/')
  @UseInterceptors(FileInterceptor(''))
  async createUser(@Req() req: Request, @Res() res: Response) {
    // get user
    console.log(req.headers)

    return res.send({ status: 'ok' })
  }

  @Put('/:id')
  async updateUser(@Req() req: Request, @Res() res: Response) {
    // get user
  }

  @Patch('/:id')
  async updateUserField(@Req() req: Request, @Res() res: Response) {
    // get user
  }

  @Delete('/:id')
  async deleteUser(@Req() req: Request, @Res() res: Response) {
    // get user
  }
}
