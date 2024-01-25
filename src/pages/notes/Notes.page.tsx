import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined'

import styles from './notes.module.css'

import EmptyViewMolecule from '../../components/molecules/empty-view/EmptyView.molecule'

const NotesPage = () => {
  return (
    <div className={styles.notes}>
      <EmptyViewMolecule
        icon={<LightbulbOutlinedIcon sx={{ width: '128px', height: '128px' }} />}
        text='Notes you add appear here'
      />
    </div>
  )
}

export default NotesPage
