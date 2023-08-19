import { IsInt, IsNotEmpty, IsString, Max, MaxLength } from 'class-validator';
import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Estudiante {
  @PrimaryGeneratedColumn()
  @IsNotEmpty({ message: 'Debes de indicar el id del estudiante' })
  @IsInt({ message: 'Inserte un valor númerico' })
  IdEstudiante: number;

  @Column()
  @Max(20, { message: 'Inserte un maximo de 20 caracteres' })
  @IsNotEmpty({ message: 'Campo Requerido' })
  @IsString({ message: 'Inserte el nombre' })
  nombre: string;

  @Column()
  @Max(20, { message: 'Inserte un maximo de 20 caracteres' })
  @IsNotEmpty({ message: 'Campo Requerido' })
  @IsString({ message: 'Inserte el apellido 1' })
  apellido1: string;

  @Column()
  @Max(20, { message: 'Inserte un maximo de 20 caracteres' })
  @IsNotEmpty({ message: 'Campo Requerido' })
  @IsString({ message: 'Inserte el apellido 2' })
  apellido2: string;

  @Column()
  @IsNotEmpty({ message: 'Debes de indicar la Fecha de Nacimiento' })
  FechaNah: Date;

  @Column()
  @MaxLength(1, { message: 'Debe ser menos de 1 caracter' })
  @IsNotEmpty({ message: 'Debes de indicar el Género formato: M/F' })
  Genero: string;

  @Column({ default: true })
  Estado: Boolean;
  
}
