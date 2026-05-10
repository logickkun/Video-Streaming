import { AppShell } from '../components/AppShell'

type ServicePlaceholderPageProps = {
  serviceName: string
}

export function ServicePlaceholderPage({
  serviceName,
}: ServicePlaceholderPageProps) {
  return (
    <AppShell>
      <main className="placeholder-page">
        <section className="empty-state">
          <p className="eyebrow">{serviceName} Service</p>
          <h1>{serviceName}</h1>
          <p>서비스 경계만 먼저 잡아둔 상태입니다.</p>
        </section>
      </main>
    </AppShell>
  )
}
