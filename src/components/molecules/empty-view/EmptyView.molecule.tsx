import React from 'react'

import globals from '../../../lib/global/globals.module.css'
import styles from './emptyview.module.css'

import { EmptyViewProps } from './emptyview.type'

const EmptyViewMolecule: React.FC<EmptyViewProps> = ({ icon, text }) => {
  return (
    <div
      className={`${styles.empty__view} ${globals.flex} ${globals['flex-column']} ${globals['gap-16']} ${globals['center-items']}`}
    >
      <span>{icon}</span>
      <h2>{text}</h2>
    </div>
  )
}

export default EmptyViewMolecule
