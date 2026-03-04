import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();

  // 1. Activar validaciones globales (para que class-validator funcione en tus DTOs)
  app.useGlobalPipes(new ValidationPipe());

  // 2. Configuración de Swagger
  const config = new DocumentBuilder()
    .setTitle('API de Productos')
    .setDescription('Prueba Técnica - Gestión de productos con JWT')
    .setVersion('1.0')
    .addBearerAuth() // ¡Muy importante! Esto agrega el botón de "Authorize" (candado) para tu token
    .build();
    
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, document);

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();