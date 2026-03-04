import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber, Min, IsNotEmpty } from 'class-validator';

export class CreateProductDto {
  @ApiProperty({ example: 'Teclado Mecánico', description: 'Nombre del producto' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ example: 'Switch Blue, RGB', description: 'Descripción detallada' })
  @IsString()
  description: string;

  @ApiProperty({ example: 89.99, description: 'Precio del producto (mayor a 0)' })
  @IsNumber()
  @Min(0)
  price: number;

  @ApiProperty({ example: 10, description: 'Cantidad en inventario', required: false })
  @IsNumber()
  @Min(0)
  stock?: number;
}
