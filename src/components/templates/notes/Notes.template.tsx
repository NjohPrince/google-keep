import { useEffect, useState } from 'react'
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined'

import globals from '../../../lib/global/globals.module.css'
import styles from './notes.module.css'

import { useAppSelector } from '../../../lib/hooks/redux-hooks'
import EmptyViewMolecule from '../../molecules/empty-view/EmptyView.molecule'
import NoteCardMolecule from '../../molecules/note-card/NoteCard.molecule'
import ManageNoteOrganism from '../../organisms/manage-note/ManageNote.organism'
import { NoteType } from '../../../types/models/note.model'

const NotesTemplate = () => {
  const notesState = useAppSelector(state => state.notesSlice)
  const [pinnedNotes, setPinnedNotes] = useState<NoteType[]>([])
  const [otherNotes, setOtherNotes] = useState<NoteType[]>([])

  console.log(notesState)
  useEffect(() => {
    const pinnedNotesRef = notesState.notes.filter(note => note.pinned)
    const otherNotesRef = notesState.notes.filter(note => !note.pinned)

    setPinnedNotes(pinnedNotesRef)
    setOtherNotes(otherNotesRef)
  }, [notesState])

  return (
    <section
      style={{
        position: 'relative',
      }}
      className={`${styles.notes} ${globals.flex} ${globals['flex-column']}`}
    >
      <div
        className={`${styles.top} ${globals['full-width']} ${globals['flex-column']} ${globals.flex} ${globals['center-items']}`}
      >
        <ManageNoteOrganism />

        {pinnedNotes.length > 0 ? (
          <div
            className={`${globals['full-width']} ${globals['gap-16']} ${globals.flex} ${globals['flex-column']} ${globals['center-items']}`}
          >
            <h2 className={`${globals['full-width']} ${styles.head}`}>Pinned Notes</h2>
            <div className={`${styles.grid} ${globals['full-width']}`}>
              {pinnedNotes &&
                pinnedNotes.length > 0 &&
                pinnedNotes.map(note => {
                  return <NoteCardMolecule key={note.id} data={note} />
                })}
            </div>
          </div>
        ) : (
          ''
        )}

        <div
          className={`${globals['full-width']} ${globals['gap-16']} ${globals.flex} ${globals['flex-column']} ${globals['center-items']}`}
        >
          {pinnedNotes.length > 0 && otherNotes.length > 0 ? (
            <h2 className={`${globals['full-width']} ${styles.head}`}>Other Notes</h2>
          ) : (
            ''
          )}
          <div className={`${styles.grid} ${globals['full-width']}`}>
            {otherNotes &&
              otherNotes.length > 0 &&
              otherNotes.map(note => {
                return <NoteCardMolecule key={note.id} data={note} />
              })}
          </div>
        </div>
      </div>

      {notesState.notes && notesState.notes.length === 0 ? (
        <div className={`${styles.empty} ${globals.flex} ${globals['center-items']}`}>
          <EmptyViewMolecule
            icon={<LightbulbOutlinedIcon sx={{ width: '128px', height: '128px' }} />}
            text='Notes you add appear here'
          />
        </div>
      ) : (
        ''
      )}
    </section>
  )
}

export default NotesTemplate
