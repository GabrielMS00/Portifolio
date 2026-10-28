import { skillGroups } from '../data/skills'
import { pad } from '../lib/format'
import { SectionHeader } from './SectionHeader'
import './Skills.css'

export function Skills() {
  return (
    <section className="skills" id="competencias" aria-labelledby="competencias-title">
      <div className="container">
        <SectionHeader
          slug="competencias"
          title="Competências"
          titleId="competencias-title"
          description="Ferramentas e tecnologias que uso, agrupadas por camada."
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
                {skills.map((skill) => (
                  <li className="skill" key={skill.name}>
                    {skill.name}
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>
    </section>
  )
}
