import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Provider } from 'react-redux'

import { store } from '../../../app/store/strore'
import ColorPalleteAtom from './ColorPallete.atom'
import { NoteType } from '../../../types/models/note.model'

describe('ColorPalleteAtom Component', () => {
  const mockColorPaletteProps = {
    setNote: jest.fn(),
    note: {
      id: 1,
      hasImage: false,
      title: 'Test Note',
      description: 'This is a test note',
      hasDrawing: false,
      label: '',
      backgroundColor: '',
      checkBoxes: [],
      hasCheckBoxes: false,
      archived: false,
    } as NoteType,
    id: 1,
  }

  it('renders color palette with correct elements', () => {
    const { getByTestId, getByText, getAllByRole } = render(
      <Provider store={store}>
        <ColorPalleteAtom {...mockColorPaletteProps} />
      </Provider>,
    )
  })

  it('dispatches editColor when color is selected', () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <ColorPalleteAtom {...mockColorPaletteProps} />
      </Provider>,
    )

    const colorButton = getByTestId('colorButton')
    userEvent.click(colorButton)

    expect(store.dispatch).toHaveBeenCalledWith(
      expect.objectContaining({
        type: 'notes/editColor',
        payload: {
          id: 1,
          color: '#000000',
        },
      }),
    )
  })
})
