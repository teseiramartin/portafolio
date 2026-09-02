import { useId, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Maximize2, X } from "lucide-react";

export type ProjectShot = { src: string; label: string; alt: string };

export default function ProjectGallery({ project, shots, compact = false }: {
  project: string;
  shots: ProjectShot[];
  compact?: boolean;
}) {
  const [index, setIndex] = useState(0);
  const [zoomed, setZoomed] = useState(false);
  const dialog = useRef<HTMLDialogElement>(null);
  const id = useId();
  const shot = shots[index];
  const multiple = shots.length > 1;
  const move = (step: number) => {
    setIndex((current) => (current + step + shots.length) % shots.length);
    setZoomed(false);
  };

  const close = () => dialog.current?.close();

  return (
    <div className={`project-gallery${compact ? " gallery-compact" : ""}`}>
      {multiple && (
        <div className="gallery-tabs" role="group" aria-label={`Capturas de ${project}`}>
          {shots.map((item, itemIndex) => (
            <button key={item.src} type="button" aria-pressed={index === itemIndex}
              aria-controls={`${id}-preview`} onClick={() => setIndex(itemIndex)}>
              {item.label}
            </button>
          ))}
        </div>
      )}
      <figure id={`${id}-preview`}>
        <button className="gallery-preview" type="button" onClick={() => dialog.current?.showModal()}
          aria-label={`Ampliar captura de ${project}: ${shot.label}`} aria-haspopup="dialog">
          <img src={shot.src} alt={shot.alt} loading="lazy" decoding="async" />
          <span className="gallery-expand"><Maximize2 size={14} aria-hidden="true" /> Ampliar</span>
        </button>
        <figcaption aria-live="polite">
          <span>{shot.label}</span>
          {multiple && <span className="gallery-count">{index + 1} / {shots.length}</span>}
        </figcaption>
      </figure>
      <dialog ref={dialog} className="gallery-dialog" aria-labelledby={`${id}-title`} onClose={() => setZoomed(false)}
        onClick={(event) => { if (event.target === event.currentTarget) close(); }}
        onKeyDown={(event) => {
          if (multiple && !zoomed && (event.key === "ArrowLeft" || event.key === "ArrowRight")) {
            event.preventDefault();
            move(event.key === "ArrowLeft" ? -1 : 1);
          }
        }}>
        <div className="gallery-dialog-header">
          <h4 id={`${id}-title`}>{project} <span>· {shot.label}</span></h4>
          <button type="button" onClick={close} aria-label="Cerrar captura"><X size={22} /></button>
        </div>
        <div className={`gallery-dialog-image${zoomed ? " is-zoomed" : ""}`} tabIndex={zoomed ? 0 : undefined}
          role="region" aria-label="Imagen ampliada"><img src={shot.src} alt={shot.alt} /></div>
        <div className="gallery-dialog-controls">
          {multiple && <button type="button" onClick={() => move(-1)} aria-label="Captura anterior"><ChevronLeft size={20} /><span className="gallery-direction">Anterior</span></button>}
          <button type="button" aria-pressed={zoomed} onClick={() => setZoomed(!zoomed)}>{zoomed ? "Ajustar imagen" : "Ver detalle"}</button>
          {multiple && <><span aria-live="polite">{index + 1} / {shots.length}</span>
            <button type="button" onClick={() => move(1)} aria-label="Captura siguiente"><span className="gallery-direction">Siguiente</span><ChevronRight size={20} /></button></>}
        </div>
      </dialog>
    </div>
  );
}
