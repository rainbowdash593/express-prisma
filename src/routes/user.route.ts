import { Router } from 'express';
import { Routes } from '@interfaces/routes.interface';
import UserController from '@controllers/user.controller';
import validationMiddleware from '@middlewares/validation.middleware';
import { CreateUserDto } from '@dtos/createUser.dto';

class UserRoute implements Routes {
  public path = '/users';
  public router = Router();
  public userController = new UserController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.post(`${this.path}/create`, validationMiddleware(CreateUserDto, 'body'), this.userController.createUser);
    this.router.get(`${this.path}`, this.userController.getUsers);
    this.router.get(`${this.path}/:id`, this.userController.getUser);
  }
}

export default UserRoute;
