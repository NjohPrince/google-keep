import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined'
import React from 'react'

import globals from '../../../lib/global/globals.module.css'
import styles from './searchinput.module.css'

import InputAtom from '../../atoms/input/Input.atom'
import { SearchInputProps } from './searchinput.type'
import IconTooltipMolecule from '../icon-tooltip/IconTooltip.molecule'

const SearchInputMolecule: React.FC<SearchInputProps> = ({ inputProps }) => {
  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    alert('Form submission triggered test!')
    console.log('Form submitted!')
  }

  return (
    <form
      role='search'
      autoComplete='off'
      className={`${styles.search__input} ${globals.flex} ${globals['a-center']}`}
      onSubmit={handleSearch}
    >
      <div className={`${styles.icon}`}>
        <IconTooltipMolecule
          tooltipProps={{
            text: 'Search',
            ariaLabel: 'Search',
          }}
          darker
          tooltipPosition='center'
          icon={<SearchOutlinedIcon />}
        />
      </div>
      <InputAtom {...inputProps} />
    </form>
  )
}

export default SearchInputMolecule
