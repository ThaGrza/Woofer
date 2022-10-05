import { JwtService } from '@nestjs/jwt';
import {
  Injectable,
  NestMiddleware,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { UserService } from './service/user.service';

interface UserRequest extends Request {
  user: any;
}

@Injectable()
export class IsAuthenticated implements NestMiddleware {
  constructor(
    private readonly jwt: JwtService,
    private readonly userService: UserService,
  ) {}
  async use(req: UserRequest, res: Response, next: NextFunction){
    try{

        if(
            req.headers.authorization && req.headers.authorization.startsWith('Bearer')
        )
    }
  }
}
