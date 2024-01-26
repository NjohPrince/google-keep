import '@testing-library/jest-dom'
import { render } from '@testing-library/react'

import TooltipAtom from './Tooltip.atom'

describe('TooltipAtom Component', () => {
  it('renders with correct text', () => {
    const text = 'This is a tooltip'

    const { getByText } = render(<TooltipAtom ariaLabel='tooltip' text={text} />)

    const tooltipElement = getByText(text)

    expect(tooltipElement).toBeInTheDocument()

    expect(tooltipElement.parentElement).toHaveClass('tooltip')
  })
})
