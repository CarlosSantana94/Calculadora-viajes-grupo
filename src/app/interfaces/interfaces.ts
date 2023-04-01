export interface Gasto {
  descripcion: string;
  fecha: Date;
  icono: string;
  valor: number;
  id: string;
}

export interface Persona {
  nombre: string;
  foto: string;
  top: string;
  id: string;
  total: number;

}

export interface Grupo {
  nombre: string;
  descripcion: string;
  pwd: string;

}
