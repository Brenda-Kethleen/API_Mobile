import { Injectable, UnauthorizedException } from '@nestjs/common';

@Injectable()
export class AuthService {
  login(email: string, password: string) {
    if (email === 'usuario@esoft.com' && password === 'Abc123') {
      return {
        token: '550e8400-e29b-41d4-a716-446655440000',
      };
    }

    throw new UnauthorizedException('Email ou senha inválidos.');
  }
}
