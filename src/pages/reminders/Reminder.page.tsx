import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined'

import styles from './reminders.module.css'

import EmptyViewMolecule from '../../components/molecules/empty-view/EmptyView.molecule'

const ReminderPage = () => {
  return (
    <div className={styles.reminder}>
      <EmptyViewMolecule
        icon={<NotificationsOutlinedIcon sx={{ width: '128px', height: '128px' }} />}
        text='Notes with upcoming reminders appear here'
      />
    </div>
  )
}

export default ReminderPage
