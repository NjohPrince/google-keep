import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined'

import globals from '../../../lib/global/globals.module.css'
import styles from './notes.module.css'

import EmptyViewMolecule from '../../molecules/empty-view/EmptyView.molecule'
import ManageNoteOrganism from '../../organisms/manage-note/ManageNote.organism'
import { useAppSelector } from '../../../lib/hooks/redux-hooks'
import NoteCardMolecule from '../../molecules/note-card/NoteCard.molecule'

const NotesTemplate = () => {
  const notesState = useAppSelector(state => state.notesSlice)

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

        <div className={`${styles.grid} ${globals['full-width']}`}>
          {notesState.notes.length > 0 &&
            notesState.notes.map(note => {
              return <NoteCardMolecule key={note.id} data={note} />
            })}
        </div>
      </div>

      <div className={`${styles.empty} ${globals.flex} ${globals['center-items']}`}>
        <EmptyViewMolecule
          icon={<LightbulbOutlinedIcon sx={{ width: '128px', height: '128px' }} />}
          text='Notes you add appear here'
        />
      </div>
    </section>
  )
}

export default NotesTemplate
