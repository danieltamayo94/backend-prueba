import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  // Mock de validación para la prueba.
  async login(user: any) {
    if (user.username !== 'admin' || user.password !== '1234') {
      throw new UnauthorizedException('Credenciales inválidas');
    }
    
    const payload = { username: user.username, sub: 1 };
    
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}