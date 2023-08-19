import {
  IsDate,
  IsInt,
  IsNotEmpty,
  IsString,
  Max,
  MaxLength,
} from 'class-validator';
import {
  Column,
  Entity,
  OneToMany,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Estudiante {
  @PrimaryGeneratedColumn()
  @IsNotEmpty({ message: 'Campo Requerido' })
  @IsInt({ message: 'Inserte un valor númerico' })
  EstudianteId: number;

  @Column()
  @IsNotEmpty({ message: 'No se colocó nombre de la persona' })
  @IsString({ message: 'Inserte valores alfanumericos unicamente' })
  @Max(50, {
    message: 'Inserte un total de 50 caracteres como maximo para la cedula',
  })
  Nombre: string;

  @Column()
  @IsString({ message: 'Inserte valores alfanumericos unicamente' })
  @IsNotEmpty({ message: 'Debe de ingresar el apellido  ' })
  @Max(50, {
    message: 'Inserte un total de 50 caracteres como maximo para la cedula',
  })
  Apellido1: string;

  @Column()
  @IsNotEmpty({ message: 'Segundo apellido no puede estar vacío!' })
  @IsString({ message: 'Inserte valores alfanumericos unicamente' })
  @Max(50, {
    message: 'Inserte un total de 50 caracteres como maximo para la cedula',
  })
  Apellido2: string;

  @Column()
  @IsNotEmpty({ message: 'Genero Requerido' })
  @IsString({ message: 'Inserte valores alfanumericos unicamente' })
  Genero: string;

  @Column()
  @IsNotEmpty({ message: 'Fecha de Nacimiento Vacía' })
  @IsDate({ message: 'Fecha no posee un formato adecuado' })
  FechaNacimiento: Date;

  @Column({ default: true })
  Estado: Boolean;
}
