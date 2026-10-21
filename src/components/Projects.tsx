import { projects } from '../data/projects'
import { pad } from '../lib/format'
import { ProjectCard } from './ProjectCard'
import { SectionHeader } from './SectionHeader'
import './Projects.css'

export function Projects() {
  const total = projects.length

  return (
    <section className="projects" id="projetos" aria-labelledby="projetos-title">
      <div className="container">
        <SectionHeader
          slug="projetos"
          title="Projetos em destaque"
          titleId="projetos-title"
          description="Estudos de caso com foco em resolução de problemas, decisões arquiteturais e interfaces funcionais."
          counter={
            <p className="section-counter">
              <span className="section-counter__value">{pad(total)}</span>
              <span className="label">{total === 1 ? 'Projeto' : 'Projetos'}</span>
            </p>
          }
        />

        <div className="projects__list">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} reverse={index % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  )
}
