import { Tecnologia } from '@core';
import { Get, Injectable } from '@nestjs/common';
import { PrismaProvider } from 'src/db/prisma.provider';

@Injectable()
export class TecnologiaPrisma {
  constructor(private readonly prisma: PrismaProvider) {}

  @Get()
  async obterTodas(): Promise<Tecnologia[]> {
    return this.prisma.tecnologia.findMany()
  }
}
