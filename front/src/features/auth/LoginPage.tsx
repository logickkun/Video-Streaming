import { type SubmitEventHandler, useEffect, useState } from 'react'
import { type Location, Navigate, useLocation, useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { login } from './authSlice'

type LocationState = {
  from?: Location
  reason?: 'logout'
}

export function LoginPage() {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const location = useLocation()
  const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated)
  const [userId, setUserId] = useState('streamer')
  const [password, setPassword] = useState('1234')

  const locationState = location.state as LocationState | null
  const fromLocation = locationState?.from
  const from =
    locationState?.reason === 'logout' || !fromLocation
      ? '/'
      : `${fromLocation.pathname}${fromLocation.search}${fromLocation.hash}`

  const handleSubmit: SubmitEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault()
    handleLogin()
  }

  const handleLogin = () => {
    dispatch(
      login({
        id: userId,
        name: 'Demo Streamer',
        role: 'admin',
      }),
    )
    navigate(from, { replace: true })
  }

  if (isAuthenticated) {
    return <Navigate to={from} replace />
  }

  return (
    <main className="login-page">
      <form className="login-panel" onSubmit={handleSubmit}>
        <div className="login-header">
          <span className="product-mark">VS</span>
          <div>
            <h1>Video Streaming</h1>
            <p>Service Console</p>
          </div>
        </div>

        <label className="field">
          <span>ID</span>
          <input
            value={userId}
            onChange={(event) => setUserId(event.target.value)}
            autoComplete="username"
          />
        </label>

        <label className="field">
          <span>Password</span>
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            autoComplete="current-password"
          />
        </label>

        <button className="primary-action" type="submit">
          Login
        </button>
      </form>
    </main>
  )
}
