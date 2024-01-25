import AddAlertOutlinedIcon from '@mui/icons-material/AddAlertOutlined'
import AddPhotoAlternateOutlinedIcon from '@mui/icons-material/AddPhotoAlternateOutlined'
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import ColorLensOutlinedIcon from '@mui/icons-material/ColorLensOutlined'
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined'
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined'
import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined'
import UnarchiveOutlinedIcon from '@mui/icons-material/UnarchiveOutlined'
import React from 'react'

import globals from '../../../lib/global/globals.module.css'
import styles from './notecard.module.css'

import { addImage, archiveOrRestoreNote } from '../../../app/features/notes/notes.slice'
import { useAppDispatch } from '../../../lib/hooks/redux-hooks'
import ColorPalleteAtom from '../../atoms/color-pallete/ColorPallete.atom'
import IconTooltipMolecule from '../icon-tooltip/IconTooltip.molecule'
import { NoteCardProps } from './notecard.type'

const NoteCardMolecule: React.FC<NoteCardProps> = ({ data }) => {
  const dispatch = useAppDispatch()

  const handleNoteImageUpdate = (e: React.ChangeEvent<HTMLInputElement>) => {
    const image = e.target.files?.[0]
    if (image) {
      const reader = new FileReader()

      reader.onload = e => {
        const imageBlob = new Blob([e.target?.result || ''], { type: image.type })

        const imageUrl = URL.createObjectURL(imageBlob)
        dispatch(addImage({ id: data.id, image: imageUrl }))
      }

      reader.readAsArrayBuffer(image)
    }
  }

  return (
    <div
      aria-label={data.title}
      role='button'
      style={{
        background: data.backgroundColor,
        paddingBottom: data.title.length === 0 && data.description.length === 0 ? '16px' : '52px',
      }}
      tabIndex={0}
      className={`${styles.note__card} ${globals.flex} ${globals['flex-column']} ${globals['gap-16']} ${globals['full-width']}`}
    >
      <div className={`${styles.select}`}>
        <IconTooltipMolecule
          tooltipProps={{
            text: 'Select note',
            ariaLabel: 'Select note',
          }}
          small
          tooltipPosition='center'
          icon={<CheckCircleIcon sx={{ width: '24px', height: '24px' }} />}
        />
      </div>
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
        {data.hasImage && data.image ? (
          <div className={`${styles.image}`}>
            <img width='100%' height='100%' src={data.image} alt={data.title} />
          </div>
        ) : (
          ''
        )}
        <h3
          style={{
            marginTop: data.hasImage ? '-6px' : '0px',
          }}
          className={styles.title}
        >
          {data.title}
        </h3>
        <p className={styles.description}>{data.description}</p>

        <div
          className={`${globals.flex} ${styles.icons__set} ${globals['center-items']} ${globals['gap-4']}`}
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
          <div className={`${styles.color__options} ${globals.flex} ${globals['center-items']}`}>
            <IconTooltipMolecule
              tooltipProps={{
                text: 'Background options',
                ariaLabel: 'Background options',
              }}
              small
              tooltipPosition='center'
              icon={<ColorLensOutlinedIcon sx={{ width: '18px', height: '18px' }} />}
            />
            <div className={styles.drop}>
              <ColorPalleteAtom id={data.id} />
            </div>
          </div>
          <div className={styles.upload}>
            <IconTooltipMolecule
              tooltipProps={{
                text: 'Add image',
                ariaLabel: 'Add image',
              }}
              small
              tooltipPosition='center'
              icon={<AddPhotoAlternateOutlinedIcon sx={{ width: '18px', height: '18px' }} />}
            />
            <input
              onChange={handleNoteImageUpdate}
              role='button'
              tabIndex={0}
              type='file'
              title=''
              className={styles.file__input}
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
