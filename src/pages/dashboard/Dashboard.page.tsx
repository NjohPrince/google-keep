import { Outlet } from 'react-router-dom'

import styles from './dashboard.module.css'

import SidebarOrganism from '../../components/organisms/sidebar/Sidebar.organism'

const DashboardPage = () => {
  return (
    <div className='dashboard'>
      <div className={`${styles.sidebar__wrapper}`}>
        <SidebarOrganism />
      </div>
      <div className={`${styles.content}`}>
        <Outlet />
      </div>
    </div>
  )
}

export default DashboardPage
