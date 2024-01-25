import AddPhotoAlternateOutlinedIcon from '@mui/icons-material/AddPhotoAlternateOutlined'
import BrushOutlinedIcon from '@mui/icons-material/BrushOutlined'
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined'
import { useCallback, useRef, useState } from 'react'

import globals from '../../../lib/global/globals.module.css'
import styles from './managenote.module.css'

import IconTooltipMolecule from '../../molecules/icon-tooltip/IconTooltip.molecule'
import EditorMolecule from '../../molecules/editor/Editor.molecule'
import UseOnClickOutside from '../../../lib/hooks/detect-click-outside'

const ManageNoteOrganism = () => {
  const [editorActive, setEditorActive] = useState(false)

  const ref = useRef<HTMLDivElement | null>(null)

  const outsideClickHandler = useCallback(() => {
    setEditorActive(() => {
      return false
    })
  }, [])

  UseOnClickOutside(ref, outsideClickHandler)

  return (
    <div ref={ref} className={`${styles.manage__notes} ${globals['full-width']}`}>
      {editorActive ? (
        <EditorMolecule setEditorActive={setEditorActive} editorActive={editorActive} />
      ) : (
        <div
          className={`${styles.pre__view} ${globals.flex} ${globals['s-b']} ${globals['gap-16']}`}
        >
          <input
            onClick={() => {
              setEditorActive(!editorActive)
            }}
            onKeyDown={() => {
              setEditorActive(!editorActive)
            }}
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
