import { Injectable } from '@nestjs/common';
import { find } from 'rxjs';
import { v4 as uuidv4 } from 'uuid';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './schemas/user.schema.ts';
import { UsersRepository } from './users.repository';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {}

  async getUserById(userId: string): Promise<User> {
    return this.usersRepository.findOne({ userId });
  }

  async getUsers(): Promise<User[]> {
    return this.usersRepository.find({});
  }

  async createUser(
    name: string,
    email: string,
    dog: string,
    breed: string,
    age: number,
  ): Promise<User> {
    return this.usersRepository.create({
      userId: uuidv4(),
      name,
      email,
      dog,
      breed,
      age,
    });
  }
  async updateUser(userId: string, userUpdates: UpdateUserDto): Promise<User> {
    return this.usersRepository.findOneAndUpdate({ userId }, userUpdates);
  }
}
