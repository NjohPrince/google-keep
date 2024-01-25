import { ArchiveOutlined } from '@mui/icons-material'

import globals from '../../../lib/global/globals.module.css'
import styles from './archive.module.css'

import EmptyViewMolecule from '../../molecules/empty-view/EmptyView.molecule'

const ArchiveTemplate = () => {
  return (
    <section
      style={{
        position: 'relative',
      }}
      className={`${styles.archive} ${globals.flex} ${globals['flex-column']}`}
    >
      <div
        className={`${styles.top} ${globals['full-width']} ${globals.flex} ${globals['center-items']}`}
      ></div>

      <div className={`${styles.empty} ${globals.flex} ${globals['center-items']}`}>
        <EmptyViewMolecule
          icon={<ArchiveOutlined sx={{ width: '128px', height: '128px' }} />}
          text='Your archived notes appear here'
        />
      </div>
    </section>
  )
}

export default ArchiveTemplate
