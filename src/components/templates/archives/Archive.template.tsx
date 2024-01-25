import { ArchiveOutlined } from '@mui/icons-material'

import globals from '../../../lib/global/globals.module.css'
import styles from './archive.module.css'

import EmptyViewMolecule from '../../molecules/empty-view/EmptyView.molecule'
import { useAppSelector } from '../../../lib/hooks/redux-hooks'
import NoteCardMolecule from '../../molecules/note-card/NoteCard.molecule'

const ArchiveTemplate = () => {
  const notesState = useAppSelector(state => state.notesSlice)

  return (
    <section
      style={{
        position: 'relative',
      }}
      className={`${styles.archive} ${globals.flex} ${globals['flex-column']}`}
    >
      <div
        className={`${styles.top} ${globals['full-width']} ${globals.flex} ${globals['center-items']}`}
      >
        <div className={`${globals['full-width']} ${globals.flex} ${globals['center-items']}`}>
          <div className={`${styles.grid} ${globals['full-width']}`}>
            {notesState.archivedNotes &&
              notesState.archivedNotes.length > 0 &&
              notesState.archivedNotes.map(note => {
                return <NoteCardMolecule key={note.id} data={note} />
              })}
          </div>
        </div>
      </div>

      {notesState.archivedNotes && notesState.archivedNotes.length === 0 ? (
        <div className={`${styles.empty} ${globals.flex} ${globals['center-items']}`}>
          <EmptyViewMolecule
            icon={<ArchiveOutlined sx={{ width: '128px', height: '128px' }} />}
            text='Your archived notes appear here'
          />
        </div>
      ) : (
        ''
      )}
    </section>
  )
}

export default ArchiveTemplate
