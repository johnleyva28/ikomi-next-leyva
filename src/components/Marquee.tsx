import type { ReactNode } from "react";

interface MarqueeProps {
  children: ReactNode;
  /** Duración de la animación. */
  duration?: string;
  /** Separación entre los elementos repetidos. */
  gap?: string;
  /** Repeticiones del contenido para que el bucle no se note. */
  repeat?: number;
  /** Invierte el sentido del desplazamiento. */
  reverse?: boolean;
  /** Pausa la animación cuando el puntero está encima. */
  pauseOnHover?: boolean;
  className?: string;
}

/**
 * Marquesina de desplazamiento infinito.
 * Adaptación del componente Marquee de MagicUI (magicui.design/docs/components/marquee)
 * al App Router: se apoya solo en CSS, sin librerías de animación, y por eso puede
 * seguir siendo un Server Component.
 */
export default function Marquee({
  children,
  duration = "40s",
  gap = "1rem",
  repeat = 4,
  reverse = false,
  pauseOnHover = false,
  className = "",
}: MarqueeProps) {
  return (
    <div
      className={`group flex overflow-hidden [--duration:${duration}] [--gap:${gap}] ${className}`}
    >
      {Array.from({ length: repeat }).map((_, indice) => (
        <div
          key={indice}
          className={`flex shrink-0 justify-around gap-(--gap) animate-marquee ${
            reverse ? "[animation-direction:reverse]" : ""
          } ${pauseOnHover ? "group-hover:[animation-play-state:paused]" : ""}`}
        >
          {children}
        </div>
      ))}
    </div>
  );
}
