import {IsString, IsNotEmpty, IsInt, Min} from 'class-validator';

export class CreateTecnicoDto {

    @IsString()
    @IsNotEmpty()
    nombre!: string;

    @IsString()
    @IsNotEmpty()
    servicio!: string;

    @IsInt()
    @Min(1)
    precio!: number;

}
