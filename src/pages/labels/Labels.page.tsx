import LabelOutlinedIcon from '@mui/icons-material/LabelOutlined'

import styles from './labels.module.css'

import EmptyViewMolecule from '../../components/molecules/empty-view/EmptyView.molecule'

const LabelsPage = () => {
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

export default LabelsPage
