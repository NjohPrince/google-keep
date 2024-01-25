import { DeleteOutline } from '@mui/icons-material'

import styles from './trash.module.css'

import EmptyViewMolecule from '../../components/molecules/empty-view/EmptyView.molecule'

const TrashPage = () => {
  return (
    <section
      style={{
        position: 'relative',
      }}
      className={styles.trash}
    >
      <span className={`${styles.trash__text}`}>Notes in Trash are deleted after 7 days.</span>
      <EmptyViewMolecule
        icon={<DeleteOutline sx={{ width: '128px', height: '128px' }} />}
        text='No notes in Trash'
      />
    </section>
  )
}

export default TrashPage
