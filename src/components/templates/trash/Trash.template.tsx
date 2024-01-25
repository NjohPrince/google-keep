import { DeleteOutline } from '@mui/icons-material'

import styles from './trash.module.css'

import EmptyViewMolecule from '../../molecules/empty-view/EmptyView.molecule'

const TrashTemplate = () => {
  return (
    <section
      style={{
        position: 'relative',
      }}
      className={styles.trash}
    >
      <div className={`${styles.top}`}></div>

      <div className={`${styles.empty}`}>
        <span className={`${styles.trash__text}`}>Notes in Trash are deleted after 7 days.</span>
        <EmptyViewMolecule
          icon={<DeleteOutline sx={{ width: '128px', height: '128px' }} />}
          text='No notes in Trash'
        />
      </div>
    </section>
  )
}

export default TrashTemplate
