import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { User, UserDocument } from './users/user.schema';

@Injectable()
export class AppService {
  constructor(
    @InjectModel(User.name)
    private readonly userModel: Model<UserDocument>,
  ) {}

  getHello(): string {
    return 'Hello World!';
  }

  async createUser() {
    return this.userModel.create({
      name: 'Soni',
      email: `soni${Date.now()}@gmail.com`,
    });
  }

  async getUsers() {
    return this.userModel.find();
  }
}