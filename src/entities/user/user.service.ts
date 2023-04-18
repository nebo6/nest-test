import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { genSalt, hash } from 'bcrypt'

import { User } from './user.entity'

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  availableFields = ['nameFirst', 'nameLast', 'email', 'gender', 'birthDate']

  // Filter body's fields from available fields list
  private filterFields(body: Record<string, any>) {
    const filteredBody: Record<string, any> = {}
    Object.keys(body).filter((k) => {
      if (this.availableFields.includes(k)) {
        filteredBody[k] = body[k]
      }
    })
    return filteredBody
  }

  // Register new user
  public async createUser(userData: any) {
    const salt = await genSalt(10)
    const hashedPassword = await hash(userData.password, salt)

    const newUser = this.userRepository.create({
      ...userData,
      password: hashedPassword,
    })
    return await this.userRepository.save(newUser)
  }

  // Get all users
  public async getAllUsers() {
    return await this.userRepository.find({
      select: ['id', ...(this.availableFields as any)],
    })
  }

  // Get user data
  public async getUserData(id: number) {
    return await this.userRepository.findOne({
      where: { id },
      select: ['id', ...(this.availableFields as any)],
    })
  }

  // Update user data whole
  public async updateUserData(id: number, body: any) {
    return await this.userRepository.update({ id }, this.filterFields(body))
  }
}
