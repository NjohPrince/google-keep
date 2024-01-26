import { Outlet } from 'react-router-dom'

import styles from './dashboard.module.css'

import SidebarOrganism from '../../components/organisms/sidebar/Sidebar.organism'
import { useAppSelector } from '../../lib/hooks/redux-hooks'

const DashboardPage = () => {
  const sidebarState = useAppSelector(state => state.sidebarSlice)

  return (
    <div className='dashboard'>
      <div className={`${styles.sidebar__wrapper}`}>
        <SidebarOrganism />
      </div>
      <div className={`${styles.content} ${sidebarState.active ? styles.sidebar__active : ''}`}>
        <Outlet />
      </div>
    </div>
  )
}

export default DashboardPage
