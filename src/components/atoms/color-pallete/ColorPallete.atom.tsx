import InvertColorsOffOutlinedIcon from '@mui/icons-material/InvertColorsOffOutlined'
import React from 'react'

import globals from '../../../lib/global/globals.module.css'
import styles from './color.module.css'

import { colors } from '../../../repository/colors'
import IconTooltipMolecule from '../../molecules/icon-tooltip/IconTooltip.molecule'
import { ColorPaletteProps } from './colorpalette.type'
import { useAppDispatch } from '../../../lib/hooks/redux-hooks'
import { editColor } from '../../../app/features/notes/notes.slice'

const ColorPalleteAtom: React.FC<ColorPaletteProps> = ({ setNote, note, id }) => {
  const dispatch = useAppDispatch()

  return (
    <div
      data-testid='colorButton'
      className={`${styles.palette} ${globals.flex} ${globals['a-center']}`}
    >
      {colors &&
        colors.length > 0 &&
        colors.map((color, index) => {
          return (
            <div key={index}>
              <IconTooltipMolecule
                tooltipProps={{
                  text: color.name,
                  ariaLabel: color.name,
                }}
                operation={() => {
                  if (id) {
                    dispatch(editColor({ id, color: color.colorCode }))
                  } else {
                    if (setNote && note) {
                      setNote({ ...note, backgroundColor: color.colorCode })
                    }
                  }
                }}
                onKeyDown={() => {
                  if (id) {
                    dispatch(editColor({ id, color: color.colorCode }))
                  } else {
                    if (setNote && note) {
                      setNote({ ...note, backgroundColor: color.colorCode })
                    }
                  }
                }}
                small
                tooltipPosition='center'
                icon={
                  <>
                    {color.name === 'No Color' ? (
                      <InvertColorsOffOutlinedIcon sx={{ width: '24px', height: '24px' }} />
                    ) : (
                      <button
                        style={{
                          backgroundColor: color.colorCode,
                          outline: 'none',
                          border: 'none',
                          cursor: 'pointer',
                        }}
                      ></button>
                    )}
                  </>
                }
              />
            </div>
          )
        })}
    </div>
  )
}

export default ColorPalleteAtom
