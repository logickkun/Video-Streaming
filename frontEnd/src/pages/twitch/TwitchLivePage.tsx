import { AppShell } from '../../components/AppShell'

const chatMessages = [
  { id: 1, name: 'viewer01', message: '오늘 방송 시작했네요' },
  { id: 2, name: 'minseo', message: '화질 좋습니다' },
  { id: 3, name: 'admin', message: '채팅 서비스 연결 예정' },
]

export function TwitchLivePage() {
  return (
    <AppShell>
      <main className="live-page">
        <section className="video-column">
          <div className="broadcast-screen">
            <div className="live-badge">LIVE</div>
            <div className="play-symbol" aria-hidden="true" />
            <p>Twitch Broadcast</p>
          </div>

          <section className="broadcast-info">
            <div>
              <p className="eyebrow">Twitch Service</p>
              <h1>하드코딩 방송 화면</h1>
              <p>
                Java 로그인과 Twitch 방송 목록 API가 붙기 전까지 사용할 기본
                라이브 레이아웃입니다.
              </p>
            </div>
            <dl className="stream-stats">
              <div>
                <dt>Category</dt>
                <dd>Development</dd>
              </div>
              <div>
                <dt>Viewers</dt>
                <dd>1,248</dd>
              </div>
            </dl>
          </section>
        </section>

        <aside className="chat-panel" aria-label="Twitch chat">
          <header>
            <h2>Chat</h2>
            <span>3 online</span>
          </header>
          <div className="chat-list">
            {chatMessages.map((chat) => (
              <p className="chat-message" key={chat.id}>
                <strong>{chat.name}</strong>
                <span>{chat.message}</span>
              </p>
            ))}
          </div>
          <form className="chat-input">
            <input placeholder="메시지 입력" disabled />
            <button type="button" disabled>
              Send
            </button>
          </form>
        </aside>
      </main>
    </AppShell>
  )
}
