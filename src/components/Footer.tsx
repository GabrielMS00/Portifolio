import { ArrowUp, Mail } from 'lucide-react'
import { profile } from '../data/profile'
import { GithubIcon, LinkedinIcon } from './BrandIcons'
import { Logo } from './Logo'
import './Footer.css'

export function Footer() {
  return (
    <footer className="footer" id="contato">
      <div className="container">
        <div className="footer__top">
          <div>
            <Logo />
            <p className="footer__role">{profile.role}</p>
          </div>

          <ul className="footer__links">
            <li>
              <a className="footer__link" href={`mailto:${profile.email}`}>
                <Mail size={16} aria-hidden="true" />
                {profile.email}
              </a>
            </li>
            <li>
              <a className="footer__link" href={profile.github} target="_blank" rel="noreferrer noopener">
                <GithubIcon size={16} />
                GitHub
              </a>
            </li>
            <li>
              <a className="footer__link" href={profile.linkedin} target="_blank" rel="noreferrer noopener">
                <LinkedinIcon size={16} />
                LinkedIn
              </a>
            </li>
          </ul>
        </div>

        <div className="footer__bottom">
          <p>
            © {new Date().getFullYear()} {profile.name}
          </p>
          <a className="footer__top-link" href="#top">
            topo
            <ArrowUp size={12} aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  )
}
