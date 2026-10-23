import { profile } from '../data/profile'
import './Hero.css'

const rows = [
  { label: 'Função', value: profile.role },
  { label: 'Foco', value: profile.focus.join(' · ') },
  { label: 'Stack base', value: profile.baseStack.join(' · ') },
  { label: 'Formação', value: profile.education },
]

export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="container hero__inner">
        <div>
          <p className="hero__eyebrow">&gt; software_engineer</p>
          <h1 className="hero__title" id="hero-title">
            <span className="hero__name">{profile.name}</span>
            <span className="hero__accent">{profile.headline}</span>
          </h1>
          <p className="hero__summary">{profile.summary}</p>
          <div className="hero__actions">
            <a className="btn btn--primary" href="#projetos">
              Ver projetos
            </a>
            <a className="btn btn--ghost" href={profile.resume} target="_blank" rel="noreferrer noopener">
              Currículo
            </a>
            <a className="btn btn--ghost" href={profile.github} target="_blank" rel="noreferrer noopener">
              GitHub
            </a>
          </div>
        </div>

        <aside className="profile" aria-label="Resumo do perfil">
          <div className="profile__head">
            <span>perfil.json</span>
            <span className="profile__status">
              <span className="profile__dot" aria-hidden="true" />
              {profile.availability}
            </span>
          </div>
          <dl>
            {rows.map((row) => (
              <div className="profile__row" key={row.label}>
                <dt className="label">{row.label}</dt>
                <dd className="profile__value">{row.value}</dd>
              </div>
            ))}
          </dl>
        </aside>
      </div>
    </section>
  )
}
