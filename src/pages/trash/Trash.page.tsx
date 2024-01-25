import { DeleteOutline } from '@mui/icons-material'

import styles from './trash.module.css'

import EmptyViewMolecule from '../../components/molecules/empty-view/EmptyView.molecule'

const TrashPage = () => {
  return (
    <div className={styles.trash}>
      <EmptyViewMolecule
        icon={<DeleteOutline sx={{ width: '128px', height: '128px' }} />}
        text='No notes in Trash'
      />
    </div>
  )
}

export default TrashPage
