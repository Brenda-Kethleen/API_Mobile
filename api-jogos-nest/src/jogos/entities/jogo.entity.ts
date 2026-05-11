import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('jogos')
export class Jogo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column()
  tipo: string;

  @Column('integer')
  nota: number;

  @Column()
  review: string;
}
