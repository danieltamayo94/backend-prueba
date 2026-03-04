import { Controller, Post, Body } from '@nestjs/common';
import { ApiTags, ApiBody } from '@nestjs/swagger'; // Importamos ApiBody
import { AuthService } from './auth.service';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        username: { type: 'string', example: 'admin' },
        password: { type: 'string', example: '1234' }
      }
    }
  }) // Esto le dibuja la cajita a Swagger mágicamente
  login(@Body() body: any) {
    return this.authService.login(body);
  }
}