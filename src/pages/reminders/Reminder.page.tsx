import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined'

import styles from './reminders.module.css'

import EmptyViewMolecule from '../../components/molecules/empty-view/EmptyView.molecule'

const ReminderPage = () => {
  return (
    <section
      style={{
        position: 'relative',
      }}
      className={styles.reminder}
    >
      <EmptyViewMolecule
        icon={<NotificationsOutlinedIcon sx={{ width: '128px', height: '128px' }} />}
        text='Notes with upcoming reminders appear here'
      />
    </section>
  )
}

export default ReminderPage
