import { Link } from 'react-router-dom'
import { AppShell } from '../components/AppShell'

const services = [
  {
    name: 'Twitch',
    path: '/twitch',
    description: 'Live room, chat, stream information',
    accent: 'service-twitch',
  },
  {
    name: 'Zoom',
    path: '/zoom',
    description: 'Meeting room service boundary',
    accent: 'service-zoom',
  },
  {
    name: 'Youtube',
    path: '/youtube',
    description: 'Video channel service boundary',
    accent: 'service-youtube',
  },
]

export function ServiceSelectPage() {
  return (
    <AppShell>
      <main className="service-select-page">
        <div className="service-actions" aria-label="Service selection">
          {services.map((service) => (
            <Link
              className={`service-button ${service.accent}`}
              key={service.name}
              to={service.path}
            >
              <span>{service.name}</span>
              <small>{service.description}</small>
            </Link>
          ))}
        </div>
      </main>
    </AppShell>
  )
}
