import type { ReactNode } from 'react'
import './SectionHeader.css'

type SectionHeaderProps = {
  slug: string
  title: string
  titleId: string
  description: string
  counter?: ReactNode
}

export function SectionHeader({ slug, title, titleId, description, counter }: SectionHeaderProps) {
  return (
    <header className="section-header">
      <div>
        <p className="section-header__slug">/{slug}</p>
        <h2 className="section-header__title" id={titleId}>
          {title}
        </h2>
      </div>
      <div className="section-header__aside">
        {counter}
        <p className="section-header__description">{description}</p>
      </div>
    </header>
  )
}
