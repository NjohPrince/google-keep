import React from 'react'
import { Link } from 'react-router-dom'

import globals from '../../../lib/global/globals.module.css'
import styles from './sidebar.module.css'

import { SidebarProps } from './sidebar.type'

const SidebarLinkMolecule: React.FC<SidebarProps> = ({ icon, text, link }) => {
  return (
    <div className={`${styles.sidebar__link} ${globals['full-width']}`}>
      <Link
        to={link}
        className={`${styles.actual__link} ${globals.flex} ${globals['full-width']} ${globals['a-center']} ${globals['gap-16']}`}
      >
        {icon}
        <span>{text}</span>
      </Link>
    </div>
  )
}

export default SidebarLinkMolecule
