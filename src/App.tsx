import { BrowserRouter, Route, Routes } from 'react-router-dom'

import NavbarOrganisms from './components/organisms/navbar/Navbar.organisms'

import DashboardPage from './pages/dashboard/Dashboard.page'

import NotesTemplate from './components/templates/notes/Notes.template'
import ReminderTemplate from './components/templates/reminders/Reminder.template'
import LabelsTemplate from './components/templates/labels/Labels.template'
import ArchiveTemplate from './components/templates/archives/Archive.template'
import TrashTemplate from './components/templates/trash/Trash.template'

const App = () => {
  return (
    <div className='app'>
      <BrowserRouter>
        <NavbarOrganisms />
        <Routes>
          <Route path='/' element={<DashboardPage />}>
            <Route index element={<NotesTemplate />} />
            <Route path='reminders' element={<ReminderTemplate />} />
            <Route path='edit-labels' element={<LabelsTemplate />} />
            <Route path='archive' element={<ArchiveTemplate />} />
            <Route path='trash' element={<TrashTemplate />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
