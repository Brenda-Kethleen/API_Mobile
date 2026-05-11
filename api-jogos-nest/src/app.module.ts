import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JogosModule } from './jogos/jogos.module';
import { AuthModule } from './auth/auth.module';
import { Jogo } from './jogos/entities/jogo.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'database.sqlite',
      entities: [Jogo],
      synchronize: true,
    }),
    JogosModule,
    AuthModule,
  ],
})
export class AppModule {}
