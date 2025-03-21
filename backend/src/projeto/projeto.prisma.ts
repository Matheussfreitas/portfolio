import { Projeto } from '@core';
import { Get, Injectable } from '@nestjs/common';
import { PrismaProvider } from 'src/db/prisma.provider';

@Injectable()
export class ProjetoPrisma {
  constructor(private readonly prisma: PrismaProvider) {}

  @Get()
  async obterTodos(): Promise<Projeto[]> {
    return this.prisma.projeto.findMany() as any
  } 

  @Get()
  async buscarPorId(id: number): Promise<Projeto | null> {
    return this.prisma.projeto.findUnique({ 
      where: { id },
      include: { tecnologias: true }
    }) as any
  } 
}
