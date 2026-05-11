import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JogosModule } from './jogos/jogos.module';
import { AuthModule } from './auth/auth.module';
import { Jogo } from './jogos/entities/jogo.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: process.env.DATABASE_URL,
      entities: [Jogo],
      synchronize: true,
      ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false,
    }),
    JogosModule,
    AuthModule,
  ],
})
export class AppModule {}
