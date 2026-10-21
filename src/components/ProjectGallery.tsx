import { useEffect, useRef, useState, type CSSProperties } from 'react'
import { ChevronLeft, ChevronRight, Image as ImageIcon, Smartphone } from 'lucide-react'
import type { Project } from '../types'
import { pad } from '../lib/format'
import './ProjectGallery.css'

const SCREEN_SPEC = '390 × 844 px · iOS / Android'

type ProjectGalleryProps = {
  project: Project
  /** Posição do projeto na lista, começando em 0. Usada na numeração das figuras. */
  order: number
}

export function ProjectGallery({ project, order }: ProjectGalleryProps) {
  const [active, setActive] = useState(0)
  const { screens } = project
  const current = screens[active]
  const go = (step: number) => setActive((i) => (i + step + screens.length) % screens.length)

  // Em telas estreitas as miniaturas rolam na horizontal: mantém a ativa visível ao usar as setas
  const thumbsRef = useRef<HTMLUListElement>(null)
  const firstRender = useRef(true)
  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false
      return
    }
    const list = thumbsRef.current
    const item = list?.children[active] as HTMLElement | undefined
    if (!list || !item) return
    list.scrollTo({ left: item.offsetLeft - (list.clientWidth - item.offsetWidth) / 2 })
  }, [active])

  return (
    <div className="gallery">
      <div className="viewer">
        <div className="viewer__bar">
          <span className="viewer__dots" aria-hidden="true">
            <i />
            <i />
            <i />
          </span>
          <span className="viewer__url">
            {project.id} · app {project.category.toLowerCase()} — {current.title}
          </span>
          <div className="viewer__nav">
            <button type="button" className="viewer__btn" onClick={() => go(-1)} aria-label="Imagem anterior">
              <ChevronLeft size={14} aria-hidden="true" />
            </button>
            <span className="viewer__count">
              {pad(active + 1)}/{pad(screens.length)}
            </span>
            <button type="button" className="viewer__btn" onClick={() => go(1)} aria-label="Próxima imagem">
              <ChevronRight size={14} aria-hidden="true" />
            </button>
          </div>
        </div>

        <div
          className="viewer__stage"
          style={{ '--shot-ratio': project.screenAspect ?? 390 / 844 } as CSSProperties}
        >
          <div className="phone">
            <div
              className="phone__screen"
              style={current.statusColor ? { backgroundColor: current.statusColor } : undefined}
            >
              <span className="phone__island" aria-hidden="true" />
              {current.image ? (
                <img
                  className="phone__image"
                  src={current.image}
                  alt={current.alt ?? `${project.name}: ${current.title}`}
                />
              ) : (
                <div className="phone__empty">
                  <span className="phone__empty-icon">
                    <ImageIcon size={20} aria-hidden="true" />
                  </span>
                  <p className="phone__empty-title">Imagem · {current.title}</p>
                  <p className="phone__empty-text">Será inserida no desenvolvimento</p>
                </div>
              )}
            </div>
          </div>

          <div className="stage-info" aria-hidden="true">
            <p className="stage-info__title">{current.title}</p>
            <span className="stage-info__rule" />
            <p className="stage-info__spec">{SCREEN_SPEC}</p>
          </div>
        </div>
      </div>

      <ul className="thumbs" ref={thumbsRef}>
        {screens.map((screen, i) => (
          <li key={screen.title}>
            <button
              type="button"
              className="thumb"
              aria-pressed={i === active}
              onClick={() => setActive(i)}
            >
              <span className="thumb__frame">
                {screen.image ? (
                  <img className="thumb__image" src={screen.image} alt="" loading="lazy" />
                ) : (
                  <Smartphone size={14} aria-hidden="true" />
                )}
              </span>
              <span className="thumb__label">
                <span className="thumb__index">{pad(i + 1)}</span>
                {screen.title}
              </span>
            </button>
          </li>
        ))}
      </ul>

      <p className="caption" aria-live="polite">
        <span className="caption__fig">
          FIG. {order + 1}.{active + 1}
        </span>
        <span className="caption__text">
          <strong>{current.title}.</strong> {current.caption}
        </span>
      </p>
    </div>
  )
}
