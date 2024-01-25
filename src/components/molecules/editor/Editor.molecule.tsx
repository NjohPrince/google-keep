import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined'
import React, { useEffect, useRef } from 'react'
import AddAlertOutlinedIcon from '@mui/icons-material/AddAlertOutlined'
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined'
import ColorLensOutlinedIcon from '@mui/icons-material/ColorLensOutlined'
import AddPhotoAlternateOutlinedIcon from '@mui/icons-material/AddPhotoAlternateOutlined'
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined'
import UndoOutlinedIcon from '@mui/icons-material/UndoOutlined'
import RedoOutlinedIcon from '@mui/icons-material/RedoOutlined'
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined'

import globals from '../../../lib/global/globals.module.css'
import styles from './editor.module.css'

import IconTooltipMolecule from '../icon-tooltip/IconTooltip.molecule'
import { EditorProps } from './editor.type'

const EditorMolecule: React.FC<EditorProps> = ({
  setEditorActive,
  editorActive,
  setNote,
  note,
}) => {
  const inputRef = useRef<HTMLInputElement | null>(null)

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }, [])

  return (
    <div
      className={`${styles.editor} ${globals.flex} ${globals['flex-column']} ${globals['gap-4']}`}
    >
      <div className={`${styles.pre__view} ${globals.flex} ${globals['s-b']} ${globals['gap-16']}`}>
        <input
          aria-label='note title'
          value={note.title}
          onChange={e => setNote({ ...note, title: e.target.value })}
          type='text'
          placeholder='Title'
        />
        <div className={`${globals.flex} ${globals['a-center']} ${globals['gap-8']}`}>
          <IconTooltipMolecule
            tooltipProps={{
              text: 'Pin note',
              ariaLabel: 'Pin note',
            }}
            tooltipPosition='center'
            icon={<PushPinOutlinedIcon sx={{ width: '24px', height: '24px' }} />}
          />
        </div>
      </div>

      <input
        ref={inputRef}
        aria-label='note description'
        value={note.description}
        onChange={e => setNote({ ...note, description: e.target.value })}
        type='text'
        placeholder='Take a note'
      />

      <div
        className={`${styles.bottom__actions} ${globals.flex} ${globals['a-center']} ${globals['gap-16']} ${globals['s-b']}`}
      >
        <div className={`${globals.flex} ${globals['a-center']} ${globals['gap-12']}`}>
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
          <IconTooltipMolecule
            tooltipProps={{
              text: 'Undo',
              ariaLabel: 'Undo',
            }}
            small
            tooltipPosition='center'
            icon={<UndoOutlinedIcon sx={{ width: '18px', height: '18px' }} />}
          />
          <IconTooltipMolecule
            tooltipProps={{
              text: 'Redo',
              ariaLabel: 'Redo',
            }}
            small
            tooltipPosition='center'
            icon={<RedoOutlinedIcon sx={{ width: '18px', height: '18px' }} />}
          />
        </div>
        <div className={styles.button}>
          <button
            aria-expanded={!editorActive}
            aria-controls='collapsibleContent'
            aria-label='Close editor'
            onClick={() => setEditorActive(!editorActive)}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  )
}

export default EditorMolecule
