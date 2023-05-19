import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import jwt from 'express';
import { expressJwtSecret } from 'jwks-rsa';

@Injectable()
export class AuthorizationGuard implements CanActivate {
  async canActivate(context: ExecutionContext): Promise<boolean> {
    return true;
  }
}
