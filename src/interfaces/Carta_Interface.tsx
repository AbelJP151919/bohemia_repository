interface Plato {
  id: string;
  nombre: string;
  precio: number | null;
  descripcion?: string;
  alergenos?: string[];
  destacado?: boolean;
  foto?: string;
}

interface Categoria {
  id: string;
  nombre: string;
  platos: Plato[];
}

interface Carta {
  id: string;
  nombre: string;
  categorias: Categoria[];
}

export type { Plato, Categoria, Carta };