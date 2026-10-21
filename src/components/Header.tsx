import { Logo } from './Logo'
import './Header.css'

const links = [
  { href: '#projetos', label: 'projetos' },
  { href: '#competencias', label: 'stack' },
  { href: '#contato', label: 'contato' },
]

export function Header() {
  return (
    <header className="header">
      <div className="container header__inner">
        <Logo />
        <nav aria-label="Principal">
          <ul className="header__nav">
            {links.map((link) => (
              <li key={link.href}>
                <a className="header__link" href={link.href}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
