import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { TecnicosService } from './tecnicos.service';
import { CreateTecnicoDto } from './dto/create-tecnico.dto';
import path from 'path';
//import { CreateTecnicoDto } from './dto/create-tecnico.dto';
//import { UpdateTecnicoDto } from './dto/update-tecnico.dto';

@Controller('tecnicos')
export class TecnicosController {
  constructor(private readonly tecnicosService: TecnicosService) {}

  @Get()
  findAll(@Query('servicio') servicio?: string) {
    return this.tecnicosService.findAll(servicio);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tecnicosService.findOne(+id);
  }

  @Post()
  create(@Body() datos: CreateTecnicoDto) {
    return this.tecnicosService.create(datos);
  }

  @Delete(':id')
  remove(@Param('id') id:string) {
    return this.tecnicosService.remove(+id)
  }

  @Patch(':id')
  update(@Param('id') id:string, @Body() datos: {precio?:number; servicio?: string}) {
    return this.tecnicosService.update(+id, datos);
  }

}
