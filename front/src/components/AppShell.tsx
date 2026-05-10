import type { ReactNode } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import { logout } from '../features/auth/authSlice'

type AppShellProps = {
  children: ReactNode
}

export function AppShell({ children }: AppShellProps) {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const user = useAppSelector((state) => state.auth.user)

  const handleLogout = () => {
    dispatch(logout())
    navigate('/login', { replace: true, state: { reason: 'logout' } })
  }

  return (
    <div className="app-shell">
      <header className="top-bar">
        <Link className="brand" to="/">
          <span className="product-mark product-mark-small">VS</span>
          <span>Video Streaming</span>
        </Link>
        <div className="top-actions">
          <span className="user-name">{user?.name}</span>
          <button className="ghost-action" type="button" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </header>
      {children}
    </div>
  )
}
