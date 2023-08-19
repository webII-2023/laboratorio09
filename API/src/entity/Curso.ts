import { IsInt, IsNotEmpty, IsString, Max, MaxLength } from 'class-validator';
import {
  Column,
  Entity,
  OneToMany,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Cursos {
  @PrimaryGeneratedColumn()
  @IsNotEmpty({ message: 'Debes de indicar el id del curso ' })
  @IsInt({ message: 'Inserte un valor númerico' })
  cursoId: number;

  @Column({ nullable: false })
  @Max(20, { message: 'Inserte un maximo de 20 caracteres' })
  @IsNotEmpty({ message: 'Campo Requerido' })
  @IsString({ message: 'Inserte el nombre del curso ' })
  nombreCurso: string;

  @Column({ nullable: false })
  @Max(50, { message: 'Ingrese un máximo de 50 caracteres' })
  @IsNotEmpty({ message: 'No se colocó los creditos del curso' })
  @IsInt({ message: 'Inserte un valor númerico' })
  creditosCurso: number;

  @Column({ nullable: false })
  @Max(20, { message: 'Inserte un maximo de 20 caracteres' })
  @IsNotEmpty({ message: 'Campo Requerido' })
  @IsString({ message: 'Inserte el la descripcion del curso' })
  descripcionCurso: string;

  @Column({ default: true })
  Estado: boolean;
}
