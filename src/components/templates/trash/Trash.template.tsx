import { DeleteOutline } from '@mui/icons-material'

import globals from '../../../lib/global/globals.module.css'
import styles from './trash.module.css'

import EmptyViewMolecule from '../../molecules/empty-view/EmptyView.molecule'

const TrashTemplate = () => {
  return (
    <section
      style={{
        position: 'relative',
      }}
      className={`${styles.trash} ${globals.flex} ${globals['flex-column']}`}
    >
      <div
        className={`${styles.top} ${globals['full-width']} ${globals.flex} ${globals['center-items']}`}
      >
        <span className={`${styles.trash__text}`}>Notes in Trash are deleted after 7 days.</span>
      </div>

      <div className={`${styles.empty} ${globals.flex} ${globals['center-items']}`}>
        <EmptyViewMolecule
          icon={<DeleteOutline sx={{ width: '128px', height: '128px' }} />}
          text='No notes in Trash'
        />
      </div>
    </section>
  )
}

export default TrashTemplate
