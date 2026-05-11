import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JogosController } from './jogos.controller';
import { JogosService } from './jogos.service';
import { Jogo } from './entities/jogo.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Jogo])],
  controllers: [JogosController],
  providers: [JogosService],
})
export class JogosModule {}
