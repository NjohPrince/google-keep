import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined'

import globals from '../../../lib/global/globals.module.css'
import styles from './reminders.module.css'

import EmptyViewMolecule from '../../molecules/empty-view/EmptyView.molecule'

const ReminderTemplate = () => {
  return (
    <section
      style={{
        position: 'relative',
      }}
      className={`${styles.reminder} ${globals.flex} ${globals['flex-column']}`}
    >
      <div
        className={`${styles.top} ${globals['full-width']} ${globals.flex} ${globals['center-items']}`}
      ></div>

      <div className={`${styles.empty} ${globals.flex} ${globals['center-items']}`}>
        <EmptyViewMolecule
          icon={<NotificationsOutlinedIcon sx={{ width: '128px', height: '128px' }} />}
          text='Notes with upcoming reminders appear here'
        />
      </div>
    </section>
  )
}

export default ReminderTemplate
