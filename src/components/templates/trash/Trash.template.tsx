import { DeleteOutline } from '@mui/icons-material'

import globals from '../../../lib/global/globals.module.css'
import styles from './trash.module.css'

import EmptyViewMolecule from '../../molecules/empty-view/EmptyView.molecule'
import { useAppSelector } from '../../../lib/hooks/redux-hooks'
import NoteCardMolecule from '../../molecules/note-card/NoteCard.molecule'

const TrashTemplate = () => {
  const notesState = useAppSelector(state => state.notesSlice)

  return (
    <section
      style={{
        position: 'relative',
      }}
      className={`${styles.trash} ${globals.flex} ${globals['flex-column']}`}
    >
      <div
        className={`${styles.top} ${globals['flex-column']} ${globals['full-width']} ${globals.flex} ${globals['center-items']}`}
      >
        <span className={`${styles.trash__text}`}>Notes in Trash are deleted after 7 days.</span>
        <div className={`${globals['full-width']} ${globals.flex} ${globals['center-items']}`}>
          <div className={`${styles.grid} ${globals['full-width']}`}>
            {notesState.deletedNotes &&
              notesState.deletedNotes.length > 0 &&
              notesState.deletedNotes.map(note => {
                return <NoteCardMolecule trash key={note.id} data={note} />
              })}
          </div>
        </div>
      </div>

      {notesState.deletedNotes && notesState.deletedNotes.length === 0 ? (
        <div className={`${styles.empty} ${globals.flex} ${globals['center-items']}`}>
          <EmptyViewMolecule
            icon={<DeleteOutline sx={{ width: '128px', height: '128px' }} />}
            text='No notes in Trash'
          />
        </div>
      ) : (
        ''
      )}
    </section>
  )
}

export default TrashTemplate
