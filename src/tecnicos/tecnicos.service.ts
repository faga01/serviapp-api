import { Injectable } from '@nestjs/common';
//import { CreateTecnicoDto } from './dto/create-tecnico.dto';
//import { UpdateTecnicoDto } from './dto/update-tecnico.dto';

@Injectable()
export class TecnicosService {
  private tecnicos = [
    { id: 1, nombre: 'Pedro', servicio: 'Plomería', precio: 150000, calificacion: 4.8, disponible: true },
    { id: 2, nombre: 'Ana', servicio: 'Electricidad', precio: 200000, calificacion: 4.9, disponible: false },
    { id: 3, nombre: 'Luis', servicio: 'Cerrajería', precio: 80000, calificacion: 4.5, disponible: true },
    { id: 4, nombre: 'María', servicio: 'Plomería', precio: 120000, calificacion: 4.7, disponible: true },
  ];

  findAll() {
    return this.tecnicos;
  }

  findOne(id: number) {
    return this.tecnicos.find(t=>t.id===id);
  }

  create(datos:{nombre:string; servicio:string; precio:number}) {
    const nuevo = {
      id: this.tecnicos.length + 1,
      ...datos,
      calificacion: 5.0,
      disponible: true,
    };
    this.tecnicos.push(nuevo);
    return nuevo;
  }

  remove(id:number){
    this.tecnicos = this.tecnicos.filter(t=> t.id !== id);
    return {eliminado:id};
  }

  update(id:number, datos:{precio?:number; servicio?: string}){
    const indice = this.tecnicos.findIndex(t=>t.id === id)
    this.tecnicos[indice] = {...this.tecnicos[indice], ...datos}
    return this.tecnicos[indice]
  }


}
