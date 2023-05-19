import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import jwt from 'express';
@Injectable()
export class AuthorizationGuard implements CanActivate {
  async canActivate(context: ExecutionContext): Promise<boolean> {
    return true;
  }
}
