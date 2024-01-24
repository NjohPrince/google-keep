import { ArchiveOutlined, DeleteOutline } from '@mui/icons-material'
import EditOutlinedIcon from '@mui/icons-material/EditOutlined'
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined'
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined'

import globals from '../../../lib/global/globals.module.css'
import styles from './sidebar.module.css'

import SidebarLinkMolecule from '../../molecules/sidebar-link/SidebarLink.molecule'
import { SidebarLinkProps } from '../../molecules/sidebar-link/sidebarlink.type'

export const sidebarLinks: SidebarLinkProps[] = [
  {
    icon: <LightbulbOutlinedIcon sx={{ width: '24px', height: '24px' }} />,
    text: 'Notes',
    link: '/',
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
  },
  {
    icon: <DeleteOutline sx={{ width: '24px', height: '24px' }} />,
    text: 'Trash',
    link: '/trash',
  },
]

const SidebarOrganism = () => {
  return (
    <aside className={`${styles.sidebar} ${globals['full-width']}`}>
      <div role='navigation' className={`${globals.flex} ${globals['flex-column']}`}>
        {sidebarLinks &&
          sidebarLinks.map((link, index) => (
            <SidebarLinkMolecule
              key={index + link.text}
              icon={link.icon}
              link={link.link}
              text={link.text}
            />
          ))}
      </div>
      <div></div>
    </aside>
  )
}

export default SidebarOrganism
