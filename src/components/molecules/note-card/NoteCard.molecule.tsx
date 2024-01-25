import React from 'react'

import globals from '../../../lib/global/globals.module.css'
import styles from './notecard.module.css'

import { NoteCardProps } from './notecard.type'

const NoteCardMolecule: React.FC<NoteCardProps> = ({ data }) => {
  return (
    <article
      aria-label={data.title}
      className={`${styles.note__card} ${globals.flex} ${globals['flex-column']} ${globals['gap-16']} ${globals['full-width']}`}
    >
      <header className={styles.note__header}>
        <h3 className={styles.title}>{data.title}</h3>
        <p className={styles.description}>{data.description}</p>
      </header>
    </article>
  )
}

export default NoteCardMolecule
