import { useEffect, useRef, useState, type ReactNode } from 'react'
import { localeLabels, type Locale } from './i18n/content'
import { useLanguage } from './i18n/LanguageContext'

const YOUTUBE_EMBED = 'https://www.youtube.com/embed/6yr79aHvDfY'
const YOUTUBE_WATCH = 'https://www.youtube.com/watch?v=6yr79aHvDfY'
const EPISODE_PAGE = 'https://www.odishatalks.com/nibedita-nayak'

function Reveal({ children, className = '' }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('visible')
          observer.unobserve(el)
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className={`reveal ${className}`.trim()}>
      {children}
    </div>
  )
}

function LanguageSelect() {
  const { locale, setLocale } = useLanguage()
  const [open, setOpen] = useState(false)
  const wrapRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onPointer = (e: MouseEvent) => {
      if (!wrapRef.current?.contains(e.target as Node)) setOpen(false)
    }
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('mousedown', onPointer)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onPointer)
      document.removeEventListener('keydown', onKey)
    }
  }, [])

  const locales: Locale[] = ['en', 'bn', 'hi']

  return (
    <div className="lang-wrap" ref={wrapRef}>
      <button
        type="button"
        className="lang-btn"
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        {localeLabels[locale]} <span className="caret" aria-hidden>▾</span>
      </button>
      <div className="lang-menu" role="listbox" hidden={!open} aria-label="Language">
        {locales.map((code) => (
          <button
            key={code}
            type="button"
            role="option"
            className="lang-option"
            aria-selected={locale === code}
            onClick={() => {
              setLocale(code)
              setOpen(false)
            }}
          >
            {localeLabels[code]}
          </button>
        ))}
      </div>
    </div>
  )
}

function Header() {
  const { t } = useLanguage()
  const [menuOpen, setMenuOpen] = useState(false)

  const links = [
    { href: '#home', label: t.nav.home },
    { href: '#about', label: t.nav.about },
    { href: '#impact', label: t.nav.impact },
    { href: '#journey', label: t.nav.journey },
    { href: '#media', label: t.nav.media },
  ]

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="site-header">
      <div className="shell header-inner">
        <a href="#home" className="brand" onClick={closeMenu}>
          <span className="brand-name">Smt. Nibedita Nayak</span>
          <span className="brand-identity">{t.header.identity}</span>
        </a>

        <nav className="nav-desktop" aria-label="Primary">
          {links.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <LanguageSelect />
          <button
            type="button"
            className="menu-toggle"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label={menuOpen ? t.header.close : t.header.menu}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span className="menu-toggle-bars" aria-hidden>
              <i />
              <i />
              <i />
            </span>
          </button>
        </div>
      </div>

      <div id="mobile-nav" className={`mobile-panel${menuOpen ? ' open' : ''}`}>
        <div className="shell">
          <nav className="mobile-nav" aria-label="Mobile">
            {links.map((link) => (
              <a key={link.href} href={link.href} onClick={closeMenu}>
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  )
}

export default function App() {
  const { t } = useLanguage()

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header />

      <main id="main">
        <section className="hero" id="home">
          <div className="shell">
            <div className="hero-grid">
              <div className="hero-copy">
                <h1>{t.hero.name}</h1>
                <p className="hero-role">{t.hero.role}</p>
                <p className="hero-statement">{t.hero.statement}</p>
                <a className="hero-cta" href="#about">
                  {t.hero.cta}
                  <span aria-hidden>→</span>
                </a>
              </div>
              <figure className="hero-visual">
                <img
                  src="/images/face-portrait.png"
                  alt="Smt. Nibedita Nayak"
                  width={960}
                  height={1280}
                  fetchPriority="high"
                />
              </figure>
            </div>

            <div className="identity-strip" aria-label="Identity highlights">
              {t.hero.strip.map((item) => (
                <div className="strip-item" key={item.value}>
                  <div className="strip-value">{item.value}</div>
                  <div className="strip-label">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="about">
          <div className="shell">
            <Reveal>
              <p className="eyebrow">{t.about.eyebrow}</p>
              <h2 className="section-title">{t.about.title}</h2>
              <hr className="fine-rule" />
              <div className="about-layout">
                <div>
                  <p className="section-lead" style={{ marginTop: 0 }}>
                    {t.about.lead}
                  </p>
                  <blockquote className="pull-quote">{t.about.quote}</blockquote>
                  <div className="about-body" style={{ marginTop: '1.25rem' }}>
                    {t.about.body.map((para) => (
                      <p key={para.slice(0, 24)}>{para}</p>
                    ))}
                  </div>
                </div>
                <figure className="about-photo">
                  <img
                    src="/images/hero-portrait.png"
                    alt="Smt. Nibedita Nayak at a cultural presentation"
                    loading="lazy"
                    width={800}
                    height={900}
                  />
                </figure>
              </div>
              <div className="pillars">
                {t.about.pillars.map((pillar) => (
                  <div className="pillar" key={pillar.title}>
                    <h3>{pillar.title}</h3>
                    <p>{pillar.text}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        <section className="section" id="leadership">
          <div className="shell">
            <Reveal>
              <p className="eyebrow">{t.leadership.eyebrow}</p>
              <h2 className="section-title">{t.leadership.title}</h2>
              <p className="section-lead">{t.leadership.intro}</p>
              <ul className="role-list">
                {t.leadership.roles.map((role) => (
                  <li key={role.org}>
                    <div className="role-title">{role.title}</div>
                    <div className="role-org">{role.org}</div>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>

        <section className="section" id="journey">
          <div className="shell">
            <Reveal>
              <p className="eyebrow">{t.journey.eyebrow}</p>
              <h2 className="section-title">{t.journey.title}</h2>
              <p className="section-lead">{t.journey.intro}</p>
              <ol className="timeline">
                {t.journey.roles.map((role) => (
                  <li key={role.title}>
                    <h3>{role.title}</h3>
                    <p>{role.detail}</p>
                  </li>
                ))}
              </ol>
            </Reveal>
          </div>
        </section>

        <section className="section" id="impact">
          <div className="shell">
            <Reveal>
              <p className="eyebrow">{t.impact.eyebrow}</p>
              <h2 className="section-title">{t.impact.title}</h2>
              <p className="section-lead">{t.impact.intro}</p>
              <div className="impact-themes">
                {t.impact.themes.map((theme) => (
                  <article className="impact-theme" key={theme.title}>
                    <h3>{theme.title}</h3>
                    <p>{theme.text}</p>
                  </article>
                ))}
              </div>
              <div className="impact-numbers">
                {t.impact.numbers.map((n) => (
                  <div className="impact-number" key={n.label}>
                    <strong>{n.value}</strong>
                    <span>{n.label}</span>
                  </div>
                ))}
              </div>
              <figure className="impact-visual">
                <img
                  src="/images/women-awakening.png"
                  alt="Community inauguration and women empowerment gathering"
                  loading="lazy"
                  width={1200}
                  height={700}
                />
              </figure>
            </Reveal>
          </div>
        </section>

        <section className="section" id="culture" aria-labelledby="culture-title">
          <div className="shell">
            <Reveal>
              <p className="eyebrow">{t.culture.eyebrow}</p>
              <h2 className="section-title culture-display" id="culture-title">
                {t.culture.title}
              </h2>
              <div className="culture-layout" style={{ marginTop: '1.5rem' }}>
                <div className="culture-copy">
                  <p className="section-lead" style={{ marginTop: 0 }}>
                    {t.culture.lead}
                  </p>
                  <p>{t.culture.body}</p>
                  <ul className="culture-highlights">
                    {t.culture.highlights.map((item) => (
                      <li key={item.slice(0, 32)}>{item}</li>
                    ))}
                  </ul>
                  <div className="initiative-row">
                    <div className="initiative-label">{t.culture.initiativesLabel}</div>
                    {t.culture.initiatives.map((name) => (
                      <span key={name}>{name}</span>
                    ))}
                  </div>
                </div>
                <figure className="culture-visual">
                  <img
                    src="/images/bande-odisha.png"
                    alt="Bande Odisha community gathering under the ceremonial gateway"
                    loading="lazy"
                    width={900}
                    height={700}
                  />
                </figure>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="section" id="engagement">
          <div className="shell">
            <Reveal>
              <p className="eyebrow">{t.engagement.eyebrow}</p>
              <h2 className="section-title">{t.engagement.title}</h2>
              <p className="section-lead">{t.engagement.intro}</p>
              <ul className="engagement-list">
                {t.engagement.items.map((item) => (
                  <li key={item.event}>
                    <div className="engagement-event">{item.event}</div>
                    <div className="engagement-place">{item.place}</div>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>

        <section className="section" id="media">
          <div className="shell">
            <Reveal>
              <p className="eyebrow">{t.media.eyebrow}</p>
              <h2 className="section-title">{t.media.title}</h2>
              <div className="media-feature">
                <div className="media-copy">
                  <h3>{t.media.guest}</h3>
                  <p>{t.media.lead}</p>
                  <p>{t.media.body}</p>
                  <p className="media-note">{t.media.note}</p>
                  <a
                    className="media-cta"
                    href={YOUTUBE_WATCH}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t.media.cta}
                    <span aria-hidden>↗</span>
                  </a>
                </div>
                <div className="media-embed">
                  <iframe
                    src={`${YOUTUBE_EMBED}?rel=0`}
                    title="Odisha Talks — Nibedita Nayak Baliarsingh"
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    referrerPolicy="strict-origin-when-cross-origin"
                  />
                </div>
              </div>
              <p style={{ marginTop: '1rem', fontSize: '0.88rem', color: 'var(--ink-faint)' }}>
                <a href={EPISODE_PAGE} target="_blank" rel="noopener noreferrer">
                  odishatalks.com/nibedita-nayak
                </a>
              </p>
            </Reveal>
          </div>
        </section>

        <section className="section" id="gallery">
          <div className="shell">
            <Reveal>
              <p className="eyebrow">{t.gallery.eyebrow}</p>
              <h2 className="section-title">{t.gallery.title}</h2>
              <p className="section-lead">{t.gallery.intro}</p>
              <div className="gallery-grid">
                {t.gallery.items.map((item) => (
                  <figure className="gallery-item" key={item.src}>
                    <img src={item.src} alt={item.alt} loading="lazy" width={800} height={600} />
                    <figcaption>{item.caption}</figcaption>
                  </figure>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        <section className="section" id="education">
          <div className="shell">
            <Reveal>
              <p className="eyebrow">{t.education.eyebrow}</p>
              <h2 className="section-title">{t.education.title}</h2>
              <ul className="edu-list">
                {t.education.items.map((item) => (
                  <li key={item.degree}>
                    <div className="edu-degree">{item.degree}</div>
                    <div className="edu-institution">{item.institution}</div>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>

        <section className="section" id="contact">
          <div className="shell">
            <Reveal>
              <p className="eyebrow">{t.contact.eyebrow}</p>
              <h2 className="section-title">{t.contact.title}</h2>
              <p className="section-lead">{t.contact.intro}</p>
              <div className="contact-grid">
                <div className="contact-item">
                  <span>{t.contact.emailLabel}</span>
                  <a href="mailto:nibeditan28@yahoo.com">nibeditan28@yahoo.com</a>
                </div>
                <div className="contact-item">
                  <span>{t.contact.phoneLabel}</span>
                  <a href="tel:+919437198235">+91 94371 98235</a>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="shell footer-inner">
          <div>
            <div className="footer-name">Smt. Nibedita Nayak</div>
            <div className="footer-role">{t.footer.role}</div>
          </div>
          <div className="footer-copy">
            © {new Date().getFullYear()} Nibedita Nayak. {t.footer.rights}
          </div>
        </div>
      </footer>
    </>
  )
}
