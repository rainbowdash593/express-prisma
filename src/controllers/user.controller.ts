import { NextFunction, Request, Response } from 'express';
import UsersService from '@services/users.services';
import { CreateUserDto } from '@dtos/createUser.dto';

class UserController {
  public createUser = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const data: CreateUserDto = req.body;
      const user = await UsersService.createUser(data);
      res.status(200).json({ status: 'success', user });
    } catch (error) {
      next(error);
    }
  };

  public getUsers = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const users = await UsersService.getUsers();
      res.status(200).json({ status: 'success', users });
    } catch (error) {
      next(error);
    }
  };

  public getUser = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const userId = +req.params.id;
      const user = await UsersService.getUser(userId);

      res.status(200).json({ status: 'success', user });
    } catch (error) {
      next(error);
    }
  };
}

export default UserController;
