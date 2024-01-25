import { ArchiveOutlined } from '@mui/icons-material'

import styles from './archive.module.css'

import EmptyViewMolecule from '../../molecules/empty-view/EmptyView.molecule'

const ArchiveTemplate = () => {
  return (
    <section
      style={{
        position: 'relative',
      }}
      className={`${styles.archive}`}
    >
      <EmptyViewMolecule
        icon={<ArchiveOutlined sx={{ width: '128px', height: '128px' }} />}
        text='Your archived notes appear here'
      />
    </section>
  )
}

export default ArchiveTemplate
