import { useMemo } from 'react'

function FloatingHearts() {
  const hearts = useMemo(
    () =>
      Array.from({ length: 24 }, (_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        size: `${18 + Math.random() * 36}px`,
        delay: `${Math.random() * 10}s`,
        duration: `${10 + Math.random() * 12}s`,
        opacity: 0.25 + Math.random() * 0.55,
      })),
    []
  )

  return (
    <div className="hearts-layer" aria-hidden="true">
      {hearts.map((heart) => (
        <span
          key={heart.id}
          className="heart"
          style={{
            left: heart.left,
            fontSize: heart.size,
            animationDelay: heart.delay,
            animationDuration: heart.duration,
            opacity: heart.opacity,
          }}
        >
          ❤
        </span>
      ))}
    </div>
  )
}

function MessageCard({ title, text }) {
  return (
    <article className="card">
      <div className="card-icon">❤</div>
      <h3>{title}</h3>
      <p>{text}</p>
    </article>
  )
}

export default function App() {
  return (
    <div className="page-shell">
      <FloatingHearts />

      <header className="hero">
        <nav className="nav">
          <div className="brand">Para Ti ❤</div>
          <a className="nav-link" href="#dedicatoria">Dedicatoria</a>
        </nav>

        <div className="hero-content">
          <div className="hero-badge">Hecho con amor</div>
          <h1>Una página de corazones para dedicar</h1>
          <p>
            Porque hay personas que merecen una página entera llena de cariño,
            detalles bonitos y palabras que nacen del corazón.
          </p>

          <div className="hero-actions">
            <a className="btn btn-primary" href="#dedicatoria">Ver dedicatoria</a>
            <a className="btn btn-secondary" href="#mensajes">Leer mensajes</a>
          </div>
        </div>
      </header>

      <main>
        <section id="dedicatoria" className="section dedication">
          <div className="section-title">
            <span>❤ Dedicatoria especial</span>
            <h2>Para alguien que ilumina mis días</h2>
          </div>

          <div className="love-letter">
            <p>
              <strong>Para ti,</strong>
            </p>
            <p>
              Esta página es un pequeño detalle para recordarte lo especial que
              eres. Cada corazón que ves aquí representa un pensamiento bonito,
              una sonrisa compartida y un sentimiento sincero.
            </p>
            <p>
              Gracias por existir, por tu forma de ser, por tu esencia y por
              hacer que todo se sienta más bonito. Si alguna vez dudas de lo
              importante que eres, vuelve a esta página y recuerda que hay un
              corazón pensando en ti.
            </p>
            <p className="signature">Con mucho cariño ❤</p>
          </div>
        </section>

        <section id="mensajes" className="section messages">
          <div className="section-title center">
            <span>❤ Mensajes bonitos</span>
            <h2>Pequeñas razones para sonreír</h2>
          </div>

          <div className="cards-grid">
            <MessageCard
              title="Tu sonrisa"
              text="Tiene la magia de cambiar cualquier día gris en uno lleno de luz."
            />
            <MessageCard
              title="Tu esencia"
              text="Lo más bonito de ti no solo se ve, también se siente en cada detalle."
            />
            <MessageCard
              title="Tu presencia"
              text="Hay personas que dejan huella sin intentarlo, y tú eres una de ellas."
            />
          </div>
        </section>

        <section className="section closing">
          <div className="closing-box">
            <div className="pulse-heart">❤</div>
            <h2>Siempre habrá un corazón aquí para ti</h2>
            <p>
              Puedes personalizar esta página cambiando el nombre, el mensaje y
              los colores para dedicársela a quien quieras.
            </p>
          </div>
        </section>
      </main>
    </div>
  )
}
