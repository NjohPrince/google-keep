import LabelOutlinedIcon from '@mui/icons-material/LabelOutlined'

import globals from '../../../lib/global/globals.module.css'
import styles from './labels.module.css'

import EmptyViewMolecule from '../../molecules/empty-view/EmptyView.molecule'

const LabelsTemplate = () => {
  return (
    <section
      style={{
        position: 'relative',
      }}
      className={`${styles.labels} ${globals.flex} ${globals['flex-column']}`}
    >
      <div
        className={`${styles.top} ${globals['full-width']} ${globals.flex} ${globals['center-items']}`}
      ></div>

      <div className={`${styles.empty} ${globals.flex} ${globals['center-items']}`}>
        <EmptyViewMolecule
          icon={<LabelOutlinedIcon sx={{ width: '128px', height: '128px' }} />}
          text='Your notes labels will appear here'
        />
      </div>
    </section>
  )
}

export default LabelsTemplate
