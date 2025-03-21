import { Controller, Get } from '@nestjs/common';
import { ProjetoPrisma } from './projeto.prisma';
import { Projeto } from '@core';

@Controller('projetos')
export class ProjetoController {
  constructor(private readonly repositorio: ProjetoPrisma) {}

  @Get()
  async obterTodos(): Promise<Projeto[]> {
    return this.repositorio.obterTodos()
  }

  @Get(':id')
  async buscarPorId(id: number): Promise<Projeto | null> {
    return this.repositorio.buscarPorId(id)
  }
}
