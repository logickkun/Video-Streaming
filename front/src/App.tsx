import { Navigate, Route, Routes } from 'react-router-dom'
import { ProtectedRoute } from './routes/ProtectedRoute'
import { LoginPage } from './features/auth/LoginPage'
import { ServiceSelectPage } from './pages/ServiceSelectPage'
import { TwitchLivePage } from './pages/twitch/TwitchLivePage'
import { ServicePlaceholderPage } from './pages/ServicePlaceholderPage'
import './App.css'

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route element={<ProtectedRoute />}>
        <Route path="/" element={<ServiceSelectPage />} />
        <Route path="/twitch" element={<TwitchLivePage />} />
        <Route path="/zoom" element={<ServicePlaceholderPage serviceName="Zoom" />}/>
        <Route path="/youtube" element={<ServicePlaceholderPage serviceName="Youtube" />}/>
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default App
