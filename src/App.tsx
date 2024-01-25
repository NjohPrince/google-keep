import { BrowserRouter, Routes, Route } from 'react-router-dom'

import NavbarOrganisms from './components/organisms/navbar/Navbar.organisms'

import DashboardPage from './pages/dashboard/Dashboard.page'
import NotesPage from './pages/notes/Notes.page'
import TrashPage from './pages/trash/Trash.page'
import ArchivePage from './pages/archives/Archive.page'
import ReminderPage from './pages/reminders/Reminder.page'
import LabelsPage from './pages/labels/Labels.page'

const App = () => {
  return (
    <div className='app'>
      <BrowserRouter>
        <NavbarOrganisms />
        <Routes>
          <Route path='/' element={<DashboardPage />}>
            <Route index element={<NotesPage />} />
            <Route path='reminders' element={<ReminderPage />} />
            <Route path='edit-labels' element={<LabelsPage />} />
            <Route path='archive' element={<ArchivePage />} />
            <Route path='trash' element={<TrashPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
