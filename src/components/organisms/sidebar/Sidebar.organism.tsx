import { ArchiveOutlined, DeleteOutline } from '@mui/icons-material'
import EditOutlinedIcon from '@mui/icons-material/EditOutlined'
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined'
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined'

import globals from '../../../lib/global/globals.module.css'
import styles from './sidebar.module.css'

import SidebarLinkMolecule from '../../molecules/sidebar-link/SidebarLink.molecule'
import { SidebarLinkProps } from '../../molecules/sidebar-link/sidebarlink.type'
import { useAppSelector } from '../../../lib/hooks/redux-hooks'

const SidebarOrganism = () => {
  const notesState = useAppSelector(state => state.notesSlice)
  const sidebarLinks: SidebarLinkProps[] = [
    {
      icon: <LightbulbOutlinedIcon sx={{ width: '24px', height: '24px' }} />,
      text: 'Notes',
      link: '/',
      count: notesState.notes.length,
    },
    {
      icon: <NotificationsOutlinedIcon sx={{ width: '24px', height: '24px' }} />,
      text: 'Reminders',
      link: '/reminders',
    },
    {
      icon: <EditOutlinedIcon sx={{ width: '24px', height: '24px' }} />,
      text: 'Edit Labels',
      link: '/edit-labels',
    },
    {
      icon: <ArchiveOutlined sx={{ width: '24px', height: '24px' }} />,
      text: 'Archive',
      link: '/archive',
      count: notesState.archivedNotes.length,
    },
    {
      icon: <DeleteOutline sx={{ width: '24px', height: '24px' }} />,
      text: 'Trash',
      link: '/trash',
      count: notesState.deletedNotes.length,
    },
  ]

  const sidebarState = useAppSelector(state => state.sidebarSlice)

  return (
    <aside
      className={`${styles.sidebar} ${sidebarState.active ? styles.active : ''} ${globals['full-width']}`}
    >
      <div role='navigation' className={`${globals.flex} ${globals['flex-column']}`}>
        {sidebarLinks &&
          sidebarLinks.map((link, index) => (
            <SidebarLinkMolecule
              key={index + link.text}
              icon={link.icon}
              link={link.link}
              text={link.text}
              count={link.count}
            />
          ))}
      </div>
      <div></div>
    </aside>
  )
}

export default SidebarOrganism
