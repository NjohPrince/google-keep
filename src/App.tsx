import { BrowserRouter, Routes, Route } from 'react-router-dom'

import NavbarOrganisms from './components/organisms/navbar/Navbar.organisms'

import DashboardPage from './pages/dashboard/Dashboard.page'

const App = () => {
  return (
    <div className='app'>
      <BrowserRouter>
        <NavbarOrganisms />
        <Routes>
          <Route path='/' element={<DashboardPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
