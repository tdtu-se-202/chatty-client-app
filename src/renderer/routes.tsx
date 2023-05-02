import { Router, Route } from 'electron-router-dom'

import { MainScreen, AboutScreen, AnotherScreen } from 'renderer/screens'
import LoginPage from 'renderer/screens/Login'
import RegistrationPage from 'renderer/screens/Registration'

export function AppRoutes() {
  return (
    <Router
      main={
        <>
          <Route path="/" element={<MainScreen />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegistrationPage />} />

          <Route path="/anotherScreen" element={<AnotherScreen />} />
        </>
      }
      about={<Route path="/" element={<AboutScreen />} />}
    />
  )
}
