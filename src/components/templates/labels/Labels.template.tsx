import LabelOutlinedIcon from '@mui/icons-material/LabelOutlined'

import styles from './labels.module.css'

import EmptyViewMolecule from '../../molecules/empty-view/EmptyView.molecule'

const LabelsTemplate = () => {
  return (
    <section
      style={{
        position: 'relative',
      }}
      className={styles.labels}
    >
      <EmptyViewMolecule
        icon={<LabelOutlinedIcon sx={{ width: '128px', height: '128px' }} />}
        text='Your notes labels will appear here'
      />
    </section>
  )
}

export default LabelsTemplate
