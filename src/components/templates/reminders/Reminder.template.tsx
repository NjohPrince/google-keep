import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined'

import styles from './reminders.module.css'

import EmptyViewMolecule from '../../molecules/empty-view/EmptyView.molecule'

const ReminderTemplate = () => {
  return (
    <section
      style={{
        position: 'relative',
      }}
      className={styles.reminder}
    >
      <div className={`${styles.top}`}></div>

      <div className={`${styles.empty}`}>
        <EmptyViewMolecule
          icon={<NotificationsOutlinedIcon sx={{ width: '128px', height: '128px' }} />}
          text='Notes with upcoming reminders appear here'
        />
      </div>
    </section>
  )
}

export default ReminderTemplate
