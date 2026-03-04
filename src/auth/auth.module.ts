import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth.service';
import { JwtStrategy } from './guards/jwt-auth/jwt-auth.strategy'; // Importante que la ruta coincida luego

@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: 'SECRET_KEY_AQUI', // En producción debe venir de una variable de entorno.
      signOptions: { expiresIn: '60m' }, // Expiración de una hora.
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy], // Aquí registras AuthService y JwtStrategy
  exports: [AuthService],
})
export class AuthModule {}