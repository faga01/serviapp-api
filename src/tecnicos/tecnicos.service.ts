import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();


@Injectable()
export class TecnicosService {

  findAll(servicio?: string) {
    return prisma.tecnico.findMany({
      where: servicio ? {servicio: {contains : servicio}} : {},
    });
  }

  findOne(id: number) {
    return prisma.tecnico.findUnique({where:{id}});
  }

  create(datos:{nombre:string; servicio:string; precio:number}) {
    return prisma.tecnico.create({
      data: {...datos, calificacion: 5.0},
    })
  }

  remove(id:number){
    return prisma.tecnico.delete({where:{id}});
  }

  update(id:number, datos:{precio?:number; servicio?: string}){
    return prisma.tecnico.update({where: {id}, data: datos});
  }

}
