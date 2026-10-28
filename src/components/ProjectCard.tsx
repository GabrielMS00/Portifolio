import { Contrast, Users } from 'lucide-react'
import type { Project } from '../types'
import { pad } from '../lib/format'
import { GithubIcon } from './BrandIcons'
import { ProjectGallery } from './ProjectGallery'
import './ProjectCard.css'

type ProjectCardProps = {
  project: Project
  index: number
  /** Inverte as colunas (informações à esquerda, galeria à direita) */
  reverse?: boolean
}

export function ProjectCard({ project, index, reverse = false }: ProjectCardProps) {
  const titleId = `${project.id}-title`

  return (
    <article className={`project${reverse ? ' project--reverse' : ''}`} aria-labelledby={titleId}>
      <div className="project__media">
        <ProjectGallery project={project} order={index} />
      </div>

      <div className="project__info">
        <p className="project__meta label">
          <span className="project__code">PRJ-{pad(index + 1)}</span>
          <span className="project__sep">/</span>
          {project.category} · {project.scope}
        </p>
        <h3 className="project__title" id={titleId}>
          {project.name}
        </h3>

        <ul className="project__chips">
          <li className="chip">{project.year}</li>
          <li className="chip chip--status">
            <Contrast size={11} aria-hidden="true" />
            {project.status}
          </li>
          {project.collaboration && (
            <li className="chip">
              <Users size={11} aria-hidden="true" />
              {project.collaboration}
            </li>
          )}
        </ul>

        <p className="project__description">{project.description}</p>

        <h4 className="project__subhead label">Principais características</h4>
        <ul className="features">
          {project.features.map(({ icon: Icon, title, text }) => (
            <li className="feature" key={title}>
              <span className="feature__icon">
                <Icon size={16} aria-hidden="true" />
              </span>
              <div>
                <h5 className="feature__title">{title}</h5>
                <p className="feature__text">{text}</p>
              </div>
            </li>
          ))}
        </ul>

        <h4 className="project__subhead project__subhead--stack label">Tech stack</h4>
        <dl className="stack">
          {project.stack.map((group) => (
            <div className="stack__row" key={group.label}>
              <dt className="stack__label label">{group.label}</dt>
              <dd>
                <ul className="stack__tags">
                  {group.items.map((item) => (
                    <li className="tag" key={item}>
                      {item}
                    </li>
                  ))}
                </ul>
              </dd>
            </div>
          ))}
        </dl>

        <div className="project__actions">
          {project.repos?.map((repo) => (
            <a
              className="btn btn--primary"
              href={repo.url}
              target="_blank"
              rel="noreferrer noopener"
              key={repo.url}
            >
              <GithubIcon size={16} />
              {repo.label}
            </a>
          ))}
          {project.demoUrl && (
            <a className="btn btn--ghost" href={project.demoUrl} target="_blank" rel="noreferrer noopener">
              Ver demo
            </a>
          )}
        </div>
      </div>
    </article>
  )
}
