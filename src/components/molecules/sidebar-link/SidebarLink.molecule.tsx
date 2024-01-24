import React from 'react'
import { Link, useLocation } from 'react-router-dom'

import globals from '../../../lib/global/globals.module.css'
import styles from './sidebarlink.module.css'

import { SidebarLinkProps } from './sidebarlink.type'

const SidebarLinkMolecule: React.FC<SidebarLinkProps> = ({ icon, text, link }) => {
  const location = useLocation()

  return (
    <div className={`${styles.sidebar__link} ${globals['full-width']}`}>
      <Link
        to={link}
        aria-label={text}
        className={`${styles.actual__link} ${location.pathname === link ? styles['active'] : ''} ${globals.flex} ${globals['full-width']} ${globals['a-center']} ${globals['gap-32']}`}
      >
        {icon}
        <span>{text}</span>
      </Link>
    </div>
  )
}

export default SidebarLinkMolecule
