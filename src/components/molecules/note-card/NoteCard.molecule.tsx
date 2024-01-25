import React from 'react'
import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined'
import AddAlertOutlinedIcon from '@mui/icons-material/AddAlertOutlined'
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined'
import ColorLensOutlinedIcon from '@mui/icons-material/ColorLensOutlined'
import AddPhotoAlternateOutlinedIcon from '@mui/icons-material/AddPhotoAlternateOutlined'
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined'
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined'
import UnarchiveOutlinedIcon from '@mui/icons-material/UnarchiveOutlined'

import globals from '../../../lib/global/globals.module.css'
import styles from './notecard.module.css'

import { NoteCardProps } from './notecard.type'
import IconTooltipMolecule from '../icon-tooltip/IconTooltip.molecule'
import { useAppDispatch } from '../../../lib/hooks/redux-hooks'
import { archiveOrRestoreNote } from '../../../app/features/notes/notes.slice'

const NoteCardMolecule: React.FC<NoteCardProps> = ({ data }) => {
  const dispatch = useAppDispatch()

  return (
    <div
      aria-label={data.title}
      role='button'
      tabIndex={0}
      className={`${styles.note__card} ${globals.flex} ${globals['flex-column']} ${globals['gap-16']} ${globals['full-width']}`}
    >
      <div className={`${styles.pin}`}>
        <IconTooltipMolecule
          tooltipProps={{
            text: 'Pin note',
            ariaLabel: 'Pin note',
          }}
          small
          tooltipPosition='center'
          icon={<PushPinOutlinedIcon sx={{ width: '22px', height: '22px' }} />}
        />
      </div>
      <header
        className={`${styles.note__header} ${globals.flex} ${globals['flex-column']} ${globals['gap-16']} ${globals['full-width']}`}
      >
        <h3 className={styles.title}>{data.title}</h3>
        <p className={styles.description}>{data.description}</p>
        <div
          className={`${globals.flex} ${styles.icons__set} ${globals['a-center']} ${globals['gap-4']}`}
        >
          <div>
            <IconTooltipMolecule
              tooltipProps={{
                text: 'Remind me',
                ariaLabel: 'Remind me',
              }}
              small
              tooltipPosition='center'
              icon={<AddAlertOutlinedIcon sx={{ width: '18px', height: '18px' }} />}
            />
          </div>
          <div>
            <IconTooltipMolecule
              tooltipProps={{
                text: 'Collaborators',
                ariaLabel: 'Collaborators',
              }}
              small
              tooltipPosition='center'
              icon={<PersonAddAltOutlinedIcon sx={{ width: '18px', height: '18px' }} />}
            />
          </div>
          <div>
            <IconTooltipMolecule
              tooltipProps={{
                text: 'Background options',
                ariaLabel: 'Background options',
              }}
              small
              tooltipPosition='center'
              icon={<ColorLensOutlinedIcon sx={{ width: '18px', height: '18px' }} />}
            />
          </div>
          <div>
            <IconTooltipMolecule
              tooltipProps={{
                text: 'Add image',
                ariaLabel: 'Add image',
              }}
              small
              tooltipPosition='center'
              icon={<AddPhotoAlternateOutlinedIcon sx={{ width: '18px', height: '18px' }} />}
            />
          </div>
          <div>
            <IconTooltipMolecule
              tooltipProps={{
                text: data.archived ? 'Unarchive' : 'Archive',
                ariaLabel: data.archived ? 'Unarchive' : 'Archive',
              }}
              operation={() => {
                dispatch(
                  archiveOrRestoreNote({
                    id: data.id,
                    operation: data.archived ? 'restore' : 'archive',
                  }),
                )
              }}
              small
              tooltipPosition='center'
              icon={
                data.archived ? (
                  <UnarchiveOutlinedIcon sx={{ width: '18px', height: '18px' }} />
                ) : (
                  <ArchiveOutlinedIcon sx={{ width: '18px', height: '18px' }} />
                )
              }
            />
          </div>
          <div>
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
        </div>
      </header>
    </div>
  )
}

export default NoteCardMolecule
