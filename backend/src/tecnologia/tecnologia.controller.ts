import { Controller, Get } from '@nestjs/common';
import { Tecnologia } from "@core"
import { TecnologiaPrisma } from './tecnologia.prisma';

@Controller('tecnologias')
export class TecnologiaController {
  constructor(private readonly repositorio: TecnologiaPrisma) {}

  @Get()
  async obterTodas(): Promise<Tecnologia[]> {
    return this.repositorio.obterTodas()
  }
}
