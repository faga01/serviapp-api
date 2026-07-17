import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TecnicosService } from './tecnicos.service';
import path from 'path';
//import { CreateTecnicoDto } from './dto/create-tecnico.dto';
//import { UpdateTecnicoDto } from './dto/update-tecnico.dto';

@Controller('tecnicos')
export class TecnicosController {
  constructor(private readonly tecnicosService: TecnicosService) {}

  @Get()
  findAll() {
    return this.tecnicosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tecnicosService.findOne(+id);
  }

  @Post()
  create(@Body() datos: {nombre:string; servicio:string; precio:number}) {
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
