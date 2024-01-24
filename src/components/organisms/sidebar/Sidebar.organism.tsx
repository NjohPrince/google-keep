import React from 'react'
import { ArchitectureOutlined } from '@mui/icons-material'

import globals from '../../../lib/global/globals.module.css'
import styles from './sidebar.module.css'

import SidebarLinkMolecule from '../../molecules/sidebar-link/SidebarLink.molecule'

const SidebarOrganism = () => {
  return (
    <aside className={`${styles.sidebar} ${globals['full-width']}`}>
      <div>
        <SidebarLinkMolecule icon={<ArchitectureOutlined />} link={'/'} text='Notes' />
      </div>
      <div></div>
    </aside>
  )
}

export default SidebarOrganism
