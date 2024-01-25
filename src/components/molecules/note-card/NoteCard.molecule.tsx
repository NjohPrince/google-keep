import React from 'react'
import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined'
import AddAlertOutlinedIcon from '@mui/icons-material/AddAlertOutlined'
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined'
import ColorLensOutlinedIcon from '@mui/icons-material/ColorLensOutlined'
import AddPhotoAlternateOutlinedIcon from '@mui/icons-material/AddPhotoAlternateOutlined'
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined'
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined'

import globals from '../../../lib/global/globals.module.css'
import styles from './notecard.module.css'

import { NoteCardProps } from './notecard.type'
import IconTooltipMolecule from '../icon-tooltip/IconTooltip.molecule'

const NoteCardMolecule: React.FC<NoteCardProps> = ({ data }) => {
  return (
    <article
      aria-label={data.title}
      className={`${styles.note__card} ${globals.flex} ${globals['flex-column']} ${globals['gap-16']} ${globals['full-width']}`}
    >
      <div className={`${styles.pin}`}>
        <IconTooltipMolecule
          tooltipProps={{
            text: 'Pin note',
            ariaLabel: 'Pin note',
          }}
          tooltipPosition='center'
          icon={<PushPinOutlinedIcon sx={{ width: '24px', height: '24px' }} />}
        />
      </div>
      <header
        className={`${styles.note__header} ${globals.flex} ${globals['flex-column']} ${globals['gap-16']} ${globals['full-width']}`}
      >
        <h3 className={styles.title}>{data.title}</h3>
        <p className={styles.description}>{data.description}</p>
        <div className={`${globals.flex} ${globals['a-center']} ${globals['gap-4']}`}>
          <IconTooltipMolecule
            tooltipProps={{
              text: 'Remind me',
              ariaLabel: 'Remind me',
            }}
            small
            tooltipPosition='center'
            icon={<AddAlertOutlinedIcon sx={{ width: '18px', height: '18px' }} />}
          />
          <IconTooltipMolecule
            tooltipProps={{
              text: 'Collaborators',
              ariaLabel: 'Collaborators',
            }}
            small
            tooltipPosition='center'
            icon={<PersonAddAltOutlinedIcon sx={{ width: '18px', height: '18px' }} />}
          />
          <IconTooltipMolecule
            tooltipProps={{
              text: 'Background options',
              ariaLabel: 'Background options',
            }}
            small
            tooltipPosition='center'
            icon={<ColorLensOutlinedIcon sx={{ width: '18px', height: '18px' }} />}
          />
          <IconTooltipMolecule
            tooltipProps={{
              text: 'Add image',
              ariaLabel: 'Add image',
            }}
            small
            tooltipPosition='center'
            icon={<AddPhotoAlternateOutlinedIcon sx={{ width: '18px', height: '18px' }} />}
          />
          <IconTooltipMolecule
            tooltipProps={{
              text: 'Archive',
              ariaLabel: 'Archive',
            }}
            small
            tooltipPosition='center'
            icon={<ArchiveOutlinedIcon sx={{ width: '18px', height: '18px' }} />}
          />{' '}
          <IconTooltipMolecule
            tooltipProps={{
              text: 'More',
              ariaLabel: 'More',
            }}
            small
            tooltipPosition='center'
            icon={<MoreVertOutlinedIcon sx={{ width: '18px', height: '18px' }} />}
          />
        </div>
      </header>
    </article>
  )
}

export default NoteCardMolecule
