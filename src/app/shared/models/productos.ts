import { Categoria } from './categoria';

export interface Productos {
  id: number;
  nombre: string;
  precio: number;
  stock: number;
  fechaIngreso: Date;
  estado: boolean;
  categoria: Categoria;
}
