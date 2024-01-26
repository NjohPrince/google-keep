import AddAlertOutlinedIcon from '@mui/icons-material/AddAlertOutlined'
import AddPhotoAlternateOutlinedIcon from '@mui/icons-material/AddPhotoAlternateOutlined'
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined'
import ColorLensOutlinedIcon from '@mui/icons-material/ColorLensOutlined'
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined'
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined'
import PushPinIcon from '@mui/icons-material/PushPin'
import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined'
import RedoOutlinedIcon from '@mui/icons-material/RedoOutlined'
import UndoOutlinedIcon from '@mui/icons-material/UndoOutlined'
import React, { useEffect, useRef } from 'react'
import UnarchiveOutlinedIcon from '@mui/icons-material/UnarchiveOutlined'

import globals from '../../../lib/global/globals.module.css'
import styles from './editor.module.css'

import ColorPalleteAtom from '../../atoms/color-pallete/ColorPallete.atom'
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

  const handleNoteImageUpdate = (e: React.ChangeEvent<HTMLInputElement>) => {
    const image = e.target.files?.[0]
    if (image) {
      const reader = new FileReader()

      reader.onload = e => {
        const imageBlob = new Blob([e.target?.result || ''], { type: image.type })

        const imageUrl = URL.createObjectURL(imageBlob)
        setNote({ ...note, image: imageUrl })
      }

      reader.readAsArrayBuffer(image)
    }
  }

  return (
    <div
      className={`${styles.editor} ${globals.flex} ${globals['flex-column']} ${globals['gap-4']}`}
    >
      {note.image ? (
        <div
          style={{
            marginTop: '16px',
          }}
          className={`${globals['full-width']}`}
        >
          <img style={{ borderRadius: '6px' }} width='100%' src={note.image} alt={note.title} />
        </div>
      ) : (
        ''
      )}
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
              text: note.pinned ? 'Unpin note' : 'Pin note',
              ariaLabel: note.pinned ? 'Unpin note' : 'Pin note',
            }}
            onKeyDown={() => {
              setNote({ ...note, pinned: !note.pinned })
            }}
            operation={() => setNote({ ...note, pinned: !note.pinned })}
            small
            tooltipPosition='center'
            icon={
              note.pinned ? (
                <PushPinIcon sx={{ width: '22px', height: '22px' }} />
              ) : (
                <PushPinOutlinedIcon sx={{ width: '22px', height: '22px' }} />
              )
            }
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
              <ColorPalleteAtom setNote={setNote} note={note} />
            </div>
          </div>
          <IconTooltipMolecule
            tooltipProps={{
              text: 'Add image',
              ariaLabel: 'Add image',
            }}
            onKeyDown={() => {
              document.getElementById('fileInput')?.click()
            }}
            operation={() => {
              document.getElementById('fileInput')?.click()
            }}
            small
            tooltipPosition='center'
            icon={<AddPhotoAlternateOutlinedIcon sx={{ width: '18px', height: '18px' }} />}
          />
          <input
            onChange={handleNoteImageUpdate}
            role='button'
            id='fileInput'
            style={{ display: 'none' }}
            tabIndex={0}
            type='file'
            title=''
            className={styles.file__input}
          />
          <IconTooltipMolecule
            tooltipProps={{
              text: note.archived ? 'Unarchive' : 'Archive',
              ariaLabel: note.archived ? 'Unarchive' : 'Archive',
            }}
            small
            onKeyDown={() => {
              setNote({ ...note, archived: !note.archived })
            }}
            operation={() => {
              setNote({ ...note, archived: !note.archived })
            }}
            tooltipPosition='center'
            icon={
              note.archived ? (
                <UnarchiveOutlinedIcon sx={{ width: '18px', height: '18px' }} />
              ) : (
                <ArchiveOutlinedIcon sx={{ width: '18px', height: '18px' }} />
              )
            }
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
