import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'

import InputAtom from './Input.atom'

describe('InputAtom', () => {
  test('renders input component with specified attributes', () => {
    const mockOnChange = jest.fn()

    const testId = 'testInput'

    render(
      <InputAtom
        type='text'
        id='testId'
        placeholder='Test Placeholder'
        ariaLabel='Test Aria Label'
        ariaDescribedBy='testDescription'
        autoComplete='off'
        iconLeft={false}
        name='testName'
        onChange={mockOnChange}
        value='testValue'
      />,
    )

    const inputElement = screen.getByTestId(testId) as HTMLInputElement

    expect(inputElement).toHaveAttribute('type', 'text')
    expect(inputElement).toHaveAttribute('id', 'testId')
    expect(inputElement).toHaveAttribute('placeholder', 'Test Placeholder')
    expect(inputElement).toHaveAttribute('aria-label', 'Test Aria Label')
    expect(inputElement).toHaveAttribute('aria-describedby', 'testDescription')
    expect(inputElement).toHaveAttribute('autocomplete', 'off')
    expect(inputElement).toHaveAttribute('name', 'testName')
    expect(inputElement).toHaveAttribute('value', 'testValue')
  })

  test('triggers onChange when input value changes', () => {
    const mockOnChange = jest.fn()
    const testId = 'testInput'

    render(
      <InputAtom
        type='text'
        id='testId'
        placeholder='Test Placeholder'
        ariaLabel='Test Aria Label'
        ariaDescribedBy='testDescription'
        autoComplete='off'
        iconLeft={false}
        name='testName'
        onChange={mockOnChange}
        value='testValue'
      />,
    )

    const inputElement = screen.getByTestId(testId) as HTMLInputElement

    fireEvent.change(inputElement, { target: { value: 'new value' } })

    expect(mockOnChange).toHaveBeenCalledTimes(1)
  })
})
