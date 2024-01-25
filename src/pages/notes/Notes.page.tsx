import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined'

import styles from './notes.module.css'

import EmptyViewMolecule from '../../components/molecules/empty-view/EmptyView.molecule'

const NotesPage = () => {
  return (
    <section
      style={{
        position: 'relative',
      }}
      className={styles.notes}
    >
      <EmptyViewMolecule
        icon={<LightbulbOutlinedIcon sx={{ width: '128px', height: '128px' }} />}
        text='Notes you add appear here'
      />
    </section>
  )
}

export default NotesPage
