import { BadRequestException, Injectable, NotFoundException, OnModuleInit } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Jogo } from './entities/jogo.entity';
import { JogoDto } from './dto/jogo.dto';

@Injectable()
export class JogosService implements OnModuleInit {
  constructor(
    @InjectRepository(Jogo)
    private readonly jogosRepository: Repository<Jogo>,
  ) {}

  async onModuleInit() {
    const total = await this.jogosRepository.count();

    if (total === 0) {
      await this.jogosRepository.save([
        {
          nome: 'The Legend of Zelda',
          tipo: 'Aventura',
          nota: 10,
          review: 'Um clássico absoluto.',
        },
        {
          nome: 'FIFA 23',
          tipo: 'Esporte',
          nota: 7,
          review: 'Bom para jogar com amigos.',
        },
      ]);
    }
  }

  async listarTodos() {
    return this.jogosRepository.find({ order: { id: 'ASC' } });
  }

  async buscarPorId(id: number) {
    const jogo = await this.jogosRepository.findOne({ where: { id } });

    if (!jogo) {
      throw new NotFoundException('Jogo não encontrado.');
    }

    return jogo;
  }

  async cadastrar(dados: JogoDto) {
    this.validarCamposObrigatorios(dados);

    const novoJogo = this.jogosRepository.create(dados);
    return this.jogosRepository.save(novoJogo);
  }

  async atualizar(id: number, dados: JogoDto) {
    this.validarCamposObrigatorios(dados);

    const jogo = await this.buscarPorId(id);

    jogo.nome = dados.nome;
    jogo.tipo = dados.tipo;
    jogo.nota = dados.nota;
    jogo.review = dados.review;

    return this.jogosRepository.save(jogo);
  }

  async remover(id: number) {
    const jogo = await this.buscarPorId(id);
    await this.jogosRepository.remove(jogo);
  }

  private validarCamposObrigatorios(dados: JogoDto) {
    if (
      !dados ||
      !dados.nome ||
      !dados.tipo ||
      dados.nota === undefined ||
      dados.nota === null ||
      !dados.review
    ) {
      throw new BadRequestException(
        'Obrigatório preencher todos os campos: nome, tipo, nota e review.',
      );
    }
  }
}
