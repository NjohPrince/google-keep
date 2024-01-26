import AddPhotoAlternateOutlinedIcon from '@mui/icons-material/AddPhotoAlternateOutlined'
import BrushOutlinedIcon from '@mui/icons-material/BrushOutlined'
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined'
import { useCallback, useEffect, useRef, useState } from 'react'

import globals from '../../../lib/global/globals.module.css'
import styles from './managenote.module.css'

import { createNewNote } from '../../../app/features/notes/notes.slice'
import UseOnClickOutside from '../../../lib/hooks/detect-click-outside'
import { useAppDispatch, useAppSelector } from '../../../lib/hooks/redux-hooks'
import { NoteType } from '../../../types/models/note.model'
import EditorMolecule from '../../molecules/editor/Editor.molecule'
import IconTooltipMolecule from '../../molecules/icon-tooltip/IconTooltip.molecule'

const initialJSON = {
  id: 0,
  hasImage: false,
  title: '',
  description: '',
  hasDrawing: false,
  label: '',
  backgroundColor: 'No Color',
  checkBoxes: [],
  hasCheckBoxes: false,
  archived: false,
  image: '',
  pinned: false,
}

const ManageNoteOrganism = () => {
  const [editorActive, setEditorActive] = useState(false)
  const dispatch = useAppDispatch()
  const notesState = useAppSelector(state => state.notesSlice)

  const [note, setNote] = useState<NoteType>({
    id: 0,
    hasImage: false,
    title: '',
    description: '',
    hasDrawing: false,
    label: '',
    backgroundColor: 'No Color',
    checkBoxes: [],
    hasCheckBoxes: false,
    archived: false,
    image: '',
    pinned: false,
  })

  const ref = useRef<HTMLDivElement | null>(null)

  const outsideClickHandler = useCallback(() => {
    setEditorActive(() => {
      return false
    })
  }, [])

  UseOnClickOutside(ref, outsideClickHandler)

  useEffect(() => {
    if (!editorActive && JSON.stringify(note) !== JSON.stringify(initialJSON)) {
      dispatch(
        createNewNote({
          note: {
            ...note,
            id:
              notesState.notes.length === 0
                ? 1
                : notesState.notes[notesState.notes.length - 1].id + 1,
          },
        }),
      )

      setNote(initialJSON)
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [editorActive])

  return (
    <div
      style={{
        background:
          note.backgroundColor === 'No Color' ? 'var(--white-color)' : note.backgroundColor,
      }}
      ref={ref}
      className={`${styles.manage__notes} ${globals['full-width']}`}
    >
      {editorActive ? (
        <EditorMolecule
          setNote={setNote}
          note={note}
          setEditorActive={setEditorActive}
          editorActive={editorActive}
        />
      ) : (
        <div
          id='collapsibleContent'
          className={`${styles.pre__view} ${globals.flex} ${globals['s-b']} ${globals['gap-16']}`}
        >
          <input
            onClick={() => {
              setEditorActive(!editorActive)
            }}
            onKeyDown={() => {
              setEditorActive(!editorActive)
            }}
            role='button'
            aria-expanded={!editorActive}
            aria-controls='collapsibleContent'
            type='text'
            placeholder='Take a note'
          />
          <div className={`${globals.flex} ${globals['a-center']} ${globals['gap-8']}`}>
            <IconTooltipMolecule
              tooltipProps={{
                text: 'New List',
                ariaLabel: 'New List',
              }}
              tooltipPosition='center'
              icon={<CheckBoxOutlinedIcon sx={{ width: '24px', height: '24px' }} />}
            />
            <IconTooltipMolecule
              tooltipProps={{
                text: 'New note with drawing',
                ariaLabel: 'New note with drawing',
              }}
              tooltipPosition='center'
              icon={<BrushOutlinedIcon sx={{ width: '24px', height: '24px' }} />}
            />
            <IconTooltipMolecule
              tooltipProps={{
                text: 'New note with image',
                ariaLabel: 'New note with image',
              }}
              tooltipPosition='center'
              icon={<AddPhotoAlternateOutlinedIcon sx={{ width: '24px', height: '24px' }} />}
            />
          </div>
        </div>
      )}
    </div>
  )
}

export default ManageNoteOrganism
