import { ArchiveOutlined } from '@mui/icons-material'

import styles from './archive.module.css'

import EmptyViewMolecule from '../../components/molecules/empty-view/EmptyView.molecule'

const ArchivePage = () => {
  return (
    <div className={`${styles.archive}`}>
      <EmptyViewMolecule
        icon={<ArchiveOutlined sx={{ width: '128px', height: '128px' }} />}
        text='Your archived notes appear here'
      />
    </div>
  )
}

export default ArchivePage
