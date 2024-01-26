import React from 'react'
import { Link, useLocation } from 'react-router-dom'

import globals from '../../../lib/global/globals.module.css'
import styles from './sidebarlink.module.css'

import { SidebarLinkProps } from './sidebarlink.type'
import { useAppSelector } from '../../../lib/hooks/redux-hooks'

const SidebarLinkMolecule: React.FC<SidebarLinkProps> = ({ icon, text, link, count }) => {
  const location = useLocation()
  const sidebarState = useAppSelector(state => state.sidebarSlice)

  return (
    <div className={`${styles.sidebar__link} ${globals['full-width']}`}>
      <Link
        to={link}
        aria-label={text}
        className={`${styles.actual__link} ${location.pathname === link ? styles['active'] : ''} ${globals.flex} ${globals['full-width']} ${globals['a-center']} ${globals['gap-32']}`}
      >
        {icon}
        <span
          className={`${globals.flex} ${sidebarState.active ? '' : styles.hidden} ${globals['a-center']} ${globals['gap-4']}`}
        >
          {text}{' '}
          {count !== undefined ? (
            <span className={`${styles.count} ${globals.flex} ${globals['center-items']}`}>
              {count}
            </span>
          ) : (
            ''
          )}
        </span>
      </Link>
    </div>
  )
}

export default SidebarLinkMolecule
