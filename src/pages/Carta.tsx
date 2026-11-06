import React, { useState } from 'react';
import type { Plato, Carta, Categoria } from '../interfaces/Carta_Interface';
import carta from '../data/carta.json';

const cartas = carta.cartas as unknown as Carta[];

const ALERGENOS: Record<string, string> = {
  gluten: 'Gluten',
  lacteos: 'Lácteos',
  sulfitos: 'Sulfitos',
  crustaceos: 'Crustáceos',
  moluscos: 'Moluscos',
  pescado: 'Pescado',
  huevos: 'Huevos',
  frutos_de_cascara: 'Frutos de cáscara',
  cacahuetes: 'Cacahuetes',
  soja: 'Soja',
  sesamo: 'Sésamo',
  altramuces: 'Altramuces',
};

const formatPrecio = (precio: number | null) =>
  precio !== null ? `${precio.toFixed(2).replace('.', ',')} €` : 'Consultar';

const Carta_Bohemia: React.FC = () => {
  const [activa, setActiva] = useState<string>(cartas[0].id);
  const cartaActiva = cartas.find(c => c.id === activa) ?? cartas[0];
  const categorias: Categoria[] = cartaActiva.categorias.filter(
    cat => cat.platos.length > 0
  );

  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      {/* Cabecera */}
      <section
        aria-labelledby="carta-heading"
        className="bg-[#14161c] border border-zinc-700/80 rounded-2xl shadow-sm p-6 sm:p-10"
      >
        <h1
          id="carta-heading"
          className="text-3xl sm:text-4xl font-bold text-[#e8e2d5] mb-4 text-center"
        >
          Carta de Bohemia
        </h1>
        <p className="text-zinc-300 leading-relaxed text-center max-w-2xl mx-auto">
          Platos tradicionales con toques creativos, para compartir, repetir y
          volver. Elige la carta que quieras consultar.
        </p>

        {/* Pestañas */}
        <div
          role="tablist"
          aria-label="Cartas"
          className="mt-8 flex flex-wrap justify-center gap-3"
        >
          {cartas.map(c => {
            const seleccionada = c.id === activa;
            return (
              <button
                key={c.id}
                role="tab"
                type="button"
                aria-selected={seleccionada}
                onClick={() => setActiva(c.id)}
                className={`px-5 py-2.5 rounded-lg font-semibold transition-colors ${
                  seleccionada
                    ? 'bg-[#e8e2d5] text-[#14161c]'
                    : 'border border-[#e8e2d5]/60 text-[#e8e2d5] hover:bg-[#e8e2d5]/10'
                }`}
              >
                {c.nombre.replace('Carta ', '')}
              </button>
            );
          })}
        </div>
      </section>

      {/* Una tarjeta por categoría */}
      <div role="tabpanel" className="mt-8 flex flex-col gap-8">
        {categorias.map((categoria: Categoria) => (
          <section
            key={categoria.id}
            aria-labelledby={`cat-${categoria.id}`}
            className="bg-[#14161c] border border-zinc-700/80 rounded-2xl shadow-sm p-6 sm:p-10"
          >
            <h2
              id={`cat-${categoria.id}`}
              className="text-2xl font-bold text-[#e8e2d5] mb-6 pb-3 border-b border-zinc-700/80"
            >
              {categoria.nombre}
            </h2>

            <ul className="flex flex-col gap-5">
              {categoria.platos.map((plato: Plato) => (
                <li key={plato.id}>
                  <div className="flex items-baseline gap-3">
                    <h3 className="text-lg font-semibold text-[#e8e2d5]">
                      {plato.nombre}
                    </h3>
                    <span
                      aria-hidden="true"
                      className="flex-1 border-b border-dotted border-zinc-600 translate-y-[-4px]"
                    />
                    <span className="text-lg font-semibold text-[#e8e2d5] whitespace-nowrap">
                      {formatPrecio(plato.precio)}
                    </span>
                  </div>

                  {plato.descripcion && (
                    <p className="mt-1 text-sm text-zinc-400">
                      {plato.descripcion}
                    </p>
                  )}

                  {plato.alergenos && plato.alergenos.length > 0 && (
                    <ul
                      aria-label="Alérgenos"
                      className="mt-2 flex flex-wrap gap-1.5"
                    >
                      {plato.alergenos.map(a => (
                        <li
                          key={a}
                          className="text-xs px-2 py-0.5 rounded-full border border-zinc-700/80 bg-[#1b1e26] text-zinc-400"
                        >
                          {ALERGENOS[a] ?? a}
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      <p className="mt-8 text-center text-sm text-zinc-500">
        Precios con IVA incluido. Si tienes alguna alergia o intolerancia,
        consúltanos antes de pedir.
      </p>
    </main>
  );
};

export default Carta_Bohemia;