import { IsInt, IsNotEmpty } from 'class-validator';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';
import { Estudiante } from './Estudiante';
import { Cursos } from './Curso';

@Entity()
export class Matricula {
    @PrimaryGeneratedColumn()
    @IsNotEmpty({ message: 'Debes de indicar el id del curso ' })
    @IsInt({ message: 'Inserte un valor númerico' })
    matriculaId: number;

    @Column({ nullable: false })
    @IsNotEmpty({ message: 'Debes de indicar el id del curso ' })
    @IsInt({ message: 'Inserte un valor númerico' })
    cursoId: number;

  @Column({ nullable: false })
  @IsNotEmpty({
    message: 'Debes de indicar el Id de Curso',
  })
  IdCurso: number;

  @Column({ nullable: false })
  FechaMatricula: Date;

  @ManyToOne(()=> Estudiante, (estudiante)=>estudiante.matriculaId)
  @JoinColumn({ name: 'estudianteId' })
  estudiante: Estudiante;

  @ManyToOne(() => Cursos, (curso) => curso.MatriculaId)
  @JoinColumn({ name: 'cursoId' })
  curso: Cursos;

  
}
