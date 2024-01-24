import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined'
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined'
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined'
import RefreshOutlinedIcon from '@mui/icons-material/RefreshOutlined'
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined'
import ViewAgendaOutlinedIcon from '@mui/icons-material/ViewAgendaOutlined'
import { useState } from 'react'

import globals from '../../../lib/global/globals.module.css'
import styles from './navbar.module.css'

import SearchInputMolecule from '../../molecules/search-input/SearchInput.molecule'

const NavbarOrganisms = () => {
  const [search, setSearch] = useState('')
  const [viewType, setViewType] = useState<'List' | 'Grid'>('List')

  return (
    <nav
      role='navigation'
      className={`${globals.flex} ${styles.navbar} ${globals['full-width']} ${globals['s-b']} ${globals['a-center']} ${globals['gap-24']}`}
    >
      <div
        className={`${globals.flex} ${globals['a-center']} ${globals['full-width']} ${globals['gap-32']}`}
      >
        <div
          className={`${styles.icon} ${globals.flex} ${globals['a-center']} ${globals['gap-24']}`}
        >
          <div
            role='button'
            className={`${styles.icon__element} ${globals.flex} ${globals['center-items']}`}
          >
            <MenuOutlinedIcon sx={{ width: '24px', height: '24px' }} />
          </div>
          <div
            className={`${styles.logo} ${globals.flex} ${globals['a-center']} ${globals['gap-16']}`}
          >
            <svg
              width='96'
              height='119'
              viewBox='0 0 96 119'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M0.508362 114.264V4.81207C0.508362 2.60293 2.29922 0.812073 4.50835 0.812073H70.9275C72.1399 0.812073 73.2868 1.36194 74.0461 2.30716L94.6269 27.9299C95.1974 28.6402 95.5084 29.5239 95.5084 30.4348V114.264C95.5084 116.473 93.7175 118.264 91.5084 118.264H4.50836C2.29922 118.264 0.508362 116.473 0.508362 114.264Z'
                fill='#D99208'
              />
              <ellipse cx='48.0083' cy='55.4483' rx='22.4034' ry='23.0655' fill='white' />
              <path d='M24.839 71.4369L71.1777 71.4369V85.5907H24.839V71.4369Z' fill='#D99208' />
              <rect x='34.9023' y='72.7839' width='26.2122' height='4' rx='1' fill='white' />
              <rect x='37.0754' y='77.9239' width='21.8658' height='3.81476' rx='1' fill='white' />
              <rect x='39.4966' y='82.8786' width='17.0235' height='3.81476' rx='1' fill='white' />
            </svg>
            <h2>Keep</h2>
          </div>
        </div>
        <SearchInputMolecule
          inputProps={{
            value: search,
            placeholder: 'Search',
            ariaLabel: 'Search',
            ariaDescribedBy: 'search input',
            id: 'search',
            iconLeft: true,
            onChange: event => {
              setSearch(event.target.value)
            },
            name: 'search',
          }}
        />
      </div>
      <div className={`${globals.flex} ${globals['a-center']} ${globals['gap-32']}`}>
        <div className={`${globals.flex} ${globals['a-center']} ${styles.icons__group}`}>
          <div
            role='button'
            className={`${styles.icon__element} ${globals.flex} ${globals['center-items']}`}
          >
            <RefreshOutlinedIcon sx={{ width: '25px', height: '25px' }} />
          </div>
          <div
            role='button'
            className={`${styles.icon__element} ${globals.flex} ${globals['center-items']}`}
          >
            {viewType === 'List' ? (
              <ViewAgendaOutlinedIcon
                onClick={() => setViewType('Grid')}
                sx={{ width: '24px', height: '24px' }}
              />
            ) : (
              <GridViewOutlinedIcon
                onClick={() => setViewType('List')}
                sx={{ width: '24px', height: '24px' }}
              />
            )}
          </div>
          <div
            role='button'
            className={`${styles.icon__element} ${globals.flex} ${globals['center-items']}`}
          >
            <SettingsOutlinedIcon sx={{ width: '24px', height: '24px' }} />
          </div>
        </div>

        <div
          className={`${globals.flex} ${globals['a-center']} ${styles.icons__group} ${globals['gap-24']}`}
        >
          <div
            role='button'
            className={`${styles.icon__element} ${globals.flex} ${globals['center-items']}`}
          >
            <AppsOutlinedIcon sx={{ width: '25px', height: '25px' }} />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavbarOrganisms
