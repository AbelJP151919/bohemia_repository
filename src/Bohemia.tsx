/**
 * PCOptimizerPro.tsx
 * ---------------------------------------------------------------------------
 * Componente raíz de la aplicación "PC Optimizer Pro".
 *
 * Resumen de decisiones de rendimiento y SEO aplicadas en este archivo:
 * 1. LCP: el <h1> y los <select> del Hero se renderizan de inmediato con
 *    datos ya embebidos (GAMES, GPUS) — sin esperar a ningún fetch.
 * 2. CLS: el banner de AdSense y el SkeletonResult reservan altura fija
 *    desde el primer render, así que no hay saltos cuando aparece contenido.
 * 3. INP: `handleOptimize` está memorizado con `useCallback` y las opciones
 *    de los <select> se generan con `useMemo` para no recalcularlas en cada
 *    render del componente.
 * 4. SEO semántico: <header>, <main>, <section>, <article>, <aside> con
 *    `aria-label` en todos los controles interactivos.
 */

import { Link } from 'react-router-dom';
import carta from './data/carta.json';
import type { Plato, Carta } from './interfaces/Carta_Interface';
import opiniones from './data/opiniones.json';


const Bohemia_Bar: React.FC = () => {

  const destacados: Plato[] = (carta.cartas as Carta[])
    .flatMap(c => c.categorias)
    .flatMap(cat => cat.platos)
    .filter(p => p.destacado);

  return (
    <div className="w-full min-h-screen bg-zinc-950 text-white">

      <main className="w-full min-h-screen bg-[#14161c] text-white">

        <section className="relative w-full h-[80vh] flex flex-col items-center justify-center overflow-hidden">

          {/* Imagen de fondo de Bohemia (BADAJOZ 2026) con Tailwind */}
          <div className="absolute inset-0 w-full h-full bg-[url('./public/background_image.jpg')] bg-cover bg-center opacity-80">
            {/* Capa oscura para que el texto resalte bien sobre la foto */}
            <div className="absolute inset-0 bg-black/50"></div>
          </div>

          {/* Contenido de bienvenida por encima de la imagen */}
          <div className="relative z-10 w-full max-w-4xl px-6 text-center flex flex-col items-center">
            <p className="text-lg md:text-xl text-stone-200 mb-8 max-w-xl font-CormorantGaramond">
              Tapas, cócteles y buen ambiente en el corazón de Badajoz.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/carta"
                className="px-6 py-3 bg-[#e8e2d5] text-[#1c1c1c] font-Montserrat rounded-lg hover:bg-white transition-colors"
              >
                Ver Carta
              </Link>
              <Link
                to="/reservas"
                className="px-6 py-3 border border-[#e8e2d5] text-[#e8e2d5] font-Montserrat rounded-lg hover:bg-[#e8e2d5]/10 transition-colors"
              >
                Reservar Mesa
              </Link>
            </div>
          </div>

        </section>

        <section
          aria-labelledby="platos-heading"
          className="mt-8 bg-[#14161c] border border-zinc-700/80 rounded-2xl shadow-sm p-6 sm:p-10"
        >
          <h2
            id="platos-heading"
            className="text-3xl font-bold text-[#e8e2d5] mb-10 text-center"
          >
            Descubre Nuestros Platos Destacados
          </h2>

          <div className="flex flex-col gap-12">
            {destacados.map((p, i) => (
              <article
                key={p.id}
                className={`flex flex-col items-center gap-6 md:gap-10 md:flex-row ${i % 2 === 1 ? "md:flex-row-reverse" : ""
                  }`}
              >
                <img
                  src={p.foto}
                  alt={p.nombre}
                  loading="lazy"
                  className="w-full md:w-1/2 h-64 md:h-80 object-cover rounded-2xl shadow-md border border-zinc-700/80"
                />

                <div
                  className={`flex flex-col gap-3 w-full md:w-1/2 text-center ${i % 2 === 1 ? "md:text-right" : "md:text-left"
                    }`}
                >
                  <h3 className="text-2xl md:text-3xl font-semibold text-[#e8e2d5]">
                    {p.nombre}
                  </h3>
                  {p.descripcion && (
                    <p className="text-[#e8e2d5]">{p.descripcion}</p>
                  )}
                  <p className="text-xl font-medium text-[#e8e2d5]">
                    {p.precio !== null
                      ? `${p.precio.toFixed(2).replace(".", ",")} €`
                      : "Consultar"}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section
          aria-labelledby="seo-content-heading"
          className="mt-8 bg-[#14161c] border border-zinc-700/80 rounded-2xl shadow-sm p-6 sm:p-10"
        >
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-10">
            {/* Texto + datos */}
            <div className="w-full md:w-1/2 flex flex-col gap-5">
              <h2
                id="seo-content-heading"
                className="text-2xl font-bold text-[#e8e2d5]"
              >
                ¿Dónde estamos y qué hacemos en Bohemia Badajoz?
              </h2>

              <p className="text-base text-zinc-300 leading-relaxed">
                Un bar no convencional con una decoración y un ambiente desenfadado y
                original. Nuestra carta mezcla platos tradicionales con propuestas
                creativas, para compartir, repetir y volver.
              </p>

              <address className="not-italic flex flex-col gap-2 text-zinc-300">
                <p>
                  <span className="text-[#e8e2d5] font-semibold">Dirección: </span>
                  C/ Jacinta García Hernández, 21, 06011 Badajoz
                </p>
                <p>
                  <span className="text-[#e8e2d5] font-semibold">Teléfono: </span>
                  <a href="tel:+34633321327" className="hover:text-[#e8e2d5] underline underline-offset-4">
                    633 32 13 27
                  </a>
                </p>
              </address>

              <div className="flex flex-wrap gap-3">
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=Bohemia+Restaurante+Badajoz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-lg bg-[#e8e2d5] text-[#14161c] font-semibold hover:bg-white transition-colors"
                >
                  Cómo llegar
                </a>
                <a
                  href="tel:+34633321327"
                  className="px-5 py-2.5 rounded-lg border border-[#e8e2d5]/60 text-[#e8e2d5] hover:bg-[#e8e2d5]/10 transition-colors"
                >
                  Llamar
                </a>
              </div>
            </div>

            {/* Mapa */}
            <div className="w-full md:w-1/2">
              <div className="overflow-hidden rounded-xl border border-zinc-700/80 shadow-md">
                <iframe
                  title="Ubicación de Bohemia Badajoz en Google Maps"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1553.158801890378!2d-6.98869690956819!3d38.87097475149765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd16e5000dbebdd5%3A0xaf769a9a1b1d67b7!2sBohemia%20Restaurante!5e0!3m2!1ses!2ses!4v1793803724974!5m2!1ses!2ses"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="block w-full h-72 sm:h-80 [filter:invert(90%)_hue-rotate(180deg)_grayscale(30%)]"
                />
              </div>
            </div>
          </div>
        </section>
        <section
          aria-labelledby="opiniones-heading"
          className="mt-8 bg-[#14161c] border border-zinc-700/80 rounded-2xl shadow-sm p-6 sm:p-10"
        >
          <div className="text-center mb-10">
            <h2
              id="opiniones-heading"
              className="text-2xl sm:text-3xl font-bold text-[#e8e2d5] mb-3"
            >
              Lo que dicen de Bohemia
            </h2>
            <p className="text-zinc-300">
              <span className="text-[#e8e2d5] font-semibold">
                <span aria-hidden="true" className="text-amber-400 mr-1">★</span>
                4,6
              </span>{" "}
              · 702 reseñas en Google
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {opiniones.opiniones.map((o) => (
              <blockquote
                key={o.id}
                className="flex flex-col justify-between gap-4 rounded-xl border border-zinc-700/80 bg-[#1b1e26] p-6 shadow-md"
              >
                <p className="text-zinc-300 leading-relaxed">
                  <span aria-hidden="true" className="text-[#e8e2d5]/50 text-3xl leading-none mr-1">“</span>
                  {o.comentario}
                </p>
                <footer className="text-sm text-zinc-400 border-t border-zinc-700/80 pt-4">
                  <span className="text-[#e8e2d5] font-semibold">{o.nombre}</span>
                  {" · "}
                  {o.fecha}
                  {" · "}
                  Reseña de Google
                </footer>
              </blockquote>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <a
              href="https://www.google.com/maps/place/Bohemia+Restaurante/@38.8709748,-6.9886976,18z/data=!4m24!1m15!4m14!1m6!1m2!1s0xd16e5000dbebdd5:0xaf769a9a1b1d67b7!2sBohemia+Restaurante,+C.+Jacinta+García+Hernández,+21,+06011+Badajoz!2m2!1d-6.9872408!2d38.8709748!1m6!1m2!1s0xd16e5000dbebdd5:0xaf769a9a1b1d67b7!2sBohemia+Restaurante,+C.+Jacinta+García+Hernández,+21,+06011+Badajoz!2m2!1d-6.9872408!2d38.8709748!3m7!1s0xd16e5000dbebdd5:0xaf769a9a1b1d67b7!8m2!3d38.8709748!4d-6.9872408!9m1!1b1!16s%2Fg%2F11vxl7g6m2?entry=ttu&g_ep=EgoyMDI2MTEwMS4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-lg bg-[#e8e2d5] text-[#14161c] font-semibold hover:bg-white transition-colors"
            >
              Ver todas las reseñas en Google
            </a>
            <a
              href="URL_PARA_DEJAR_RESEÑA"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-lg border border-[#e8e2d5]/60 text-[#e8e2d5] hover:bg-[#e8e2d5]/10 transition-colors"
            >
              Déjanos tu reseña
            </a>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Bohemia_Bar;