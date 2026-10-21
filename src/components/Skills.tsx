import { projects } from '../data/projects'
import { skillGroups } from '../data/skills'
import type { Skill } from '../types'
import { pad } from '../lib/format'
import { SectionHeader } from './SectionHeader'
import './Skills.css'

/** Projetos (por posição) em cujas stacks a competência aparece */
function projectsUsing(skill: Skill) {
  const names = [skill.name, ...(skill.aliases ?? [])]
  return projects.filter((project) => project.stack.some((group) => group.items.some((item) => names.includes(item))))
}

export function Skills() {
  return (
    <section className="skills" id="competencias" aria-labelledby="competencias-title">
      <div className="container">
        <SectionHeader
          slug="competencias"
          title="Competências"
          titleId="competencias-title"
          description="Ferramentas agrupadas por camada. A coluna da direita mostra em quais projetos cada uma aparece."
        />

        <div className="skills__grid">
          {skillGroups.map(({ title, icon: Icon, skills }) => (
            <section className="skill-group" key={title} aria-label={title}>
              <header className="skill-group__head">
                <span className="skill-group__icon">
                  <Icon size={14} aria-hidden="true" />
                </span>
                <h3 className="skill-group__title">{title}</h3>
                <span className="skill-group__count">{pad(skills.length)}</span>
              </header>

              <ul>
                {skills.map((skill) => {
                  const used = projectsUsing(skill)
                  return (
                    <li className="skill" key={skill.name}>
                      <span className="skill__name">{skill.name}</span>
                      {used.length > 0 ? (
                        <span className="skill__projects" title={used.map((p) => p.name).join(', ')}>
                          {used.map((p) => `P${pad(projects.indexOf(p) + 1)}`).join(' · ')}
                          <span className="sr-only">: usado em {used.map((p) => p.name).join(' e ')}</span>
                        </span>
                      ) : (
                        <span className="skill__projects" aria-label="Ainda não aparece em nenhum projeto">
                          –
                        </span>
                      )}
                    </li>
                  )
                })}
              </ul>
            </section>
          ))}
        </div>
      </div>
    </section>
  )
}
