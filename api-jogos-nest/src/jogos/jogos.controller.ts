import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { JogosService } from './jogos.service';
import { JogoDto } from './dto/jogo.dto';

@Controller('jogos')
export class JogosController {
  constructor(private readonly jogosService: JogosService) {}

  @Get()
  listarTodos() {
    return this.jogosService.listarTodos();
  }

  @Get(':id')
  buscarPorId(@Param('id', ParseIntPipe) id: number) {
    return this.jogosService.buscarPorId(id);
  }

  @Post()
  cadastrar(@Body() dados: JogoDto) {
    return this.jogosService.cadastrar(dados);
  }

  @Put(':id')
  atualizar(@Param('id', ParseIntPipe) id: number, @Body() dados: JogoDto) {
    return this.jogosService.atualizar(id, dados);
  }

  @Delete(':id')
  @HttpCode(204)
  remover(@Param('id', ParseIntPipe) id: number) {
    return this.jogosService.remover(id);
  }
}
