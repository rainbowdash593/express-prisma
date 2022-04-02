import { PrismaClient, User } from '@prisma/client';
import { CreateUserDto } from '@dtos/createUser.dto';
import { UserNotFoundException } from '@exceptions/users.exceptions';

class UsersServices {
  public users = new PrismaClient().user;

  async getUsers(): Promise<User[]> {
    return this.users.findMany();
  }

  async getUser(id: number): Promise<User> {
    const user = await this.users.findFirst({ where: { id } });
    if (!user) {
      throw new UserNotFoundException();
    }
    return user;
  }

  async createUser(createUserDto: CreateUserDto): Promise<User> {
    return this.users.create({ data: createUserDto });
  }
}

export default new UsersServices();
