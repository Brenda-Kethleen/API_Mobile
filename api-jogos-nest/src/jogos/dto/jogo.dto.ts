import { IsInt, IsNotEmpty, IsString, Max, Min } from 'class-validator';
import { Type } from 'class-transformer';

export class JogoDto {
  @IsString()
  @IsNotEmpty({ message: 'O campo nome é obrigatório.' })
  nome: string;

  @IsString()
  @IsNotEmpty({ message: 'O campo tipo é obrigatório.' })
  tipo: string;

  @Type(() => Number)
  @IsInt({ message: 'O campo nota deve ser um número inteiro.' })
  @Min(0, { message: 'A nota mínima é 0.' })
  @Max(10, { message: 'A nota máxima é 10.' })
  nota: number;

  @IsString()
  @IsNotEmpty({ message: 'O campo review é obrigatório.' })
  review: string;
}
