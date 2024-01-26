import { Link, useLocation } from 'react-router-dom'

import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined'
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined'
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined'
import RefreshOutlinedIcon from '@mui/icons-material/RefreshOutlined'
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined'
import ViewAgendaOutlinedIcon from '@mui/icons-material/ViewAgendaOutlined'
import { useState } from 'react'

import globals from '../../../lib/global/globals.module.css'
import styles from './navbar.module.css'

import { convertPathToPascalCase } from '../../../lib/utils/convert-path'
import IconTooltipMolecule from '../../molecules/icon-tooltip/IconTooltip.molecule'
import SearchInputMolecule from '../../molecules/search-input/SearchInput.molecule'
import { useAppDispatch, useAppSelector } from '../../../lib/hooks/redux-hooks'
import { toggleState } from '../../../app/features/sidebar/sidebar.slice'

const NavbarOrganisms = () => {
  const [search, setSearch] = useState('')
  const [viewType, setViewType] = useState<'List' | 'Grid'>('List')
  const sidebarState = useAppSelector(state => state.sidebarSlice)
  const dispatch = useAppDispatch()

  const location = useLocation()
  const path = location.pathname

  const formattedPath = convertPathToPascalCase(path)

  return (
    <nav
      role='navigation'
      className={`${globals.flex} ${styles.navbar} ${globals['full-width']} ${globals['s-b']} ${globals['a-center']} ${globals['gap-24']}`}
    >
      <div className={`${globals.flex} ${globals['a-center']} ${globals['full-width']}`}>
        <div
          className={`${styles.icon} ${styles.left__logo} ${globals.flex} ${globals['a-center']} ${globals['gap-24']}`}
        >
          <IconTooltipMolecule
            tooltipProps={{
              text: 'Main Menu',
              ariaLabel: 'Main Menu',
            }}
            onKeyDown={() => {
              dispatch(toggleState({ active: !sidebarState.active }))
            }}
            operation={() => {
              dispatch(toggleState({ active: !sidebarState.active }))
            }}
            tooltipPosition='left'
            icon={<MenuOutlinedIcon sx={{ width: '24px', height: '24px' }} />}
          />
          <Link
            to={formattedPath.length > 0 ? path : '/'}
            title={formattedPath.length > 0 ? formattedPath : 'Keep'}
            className={`${styles.logo} ${globals.flex} ${globals['a-center']} ${globals['gap-16']}`}
          >
            {formattedPath.length > 0 ? (
              <></>
            ) : (
              <svg
                width='96'
                height='119'
                viewBox='0 0 96 119'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M0.508362 114.264V4.81207C0.508362 2.60293 2.29922 0.812073 4.50835 0.812073H70.9275C72.1399 0.812073 73.2868 1.36194 74.0461 2.30716L94.6269 27.9299C95.1974 28.6402 95.5084 29.5239 95.5084 30.4348V114.264C95.5084 116.473 93.7175 118.264 91.5084 118.264H4.50836C2.29922 118.264 0.508362 116.473 0.508362 114.264Z'
                  fill='#fbbc04'
                />
                <ellipse cx='48.0083' cy='55.4483' rx='22.4034' ry='23.0655' fill='white' />
                <path d='M24.839 71.4369L71.1777 71.4369V85.5907H24.839V71.4369Z' fill='#fbbc04' />
                <rect x='34.9023' y='72.7839' width='26.2122' height='4' rx='1' fill='white' />
                <rect
                  x='37.0754'
                  y='77.9239'
                  width='21.8658'
                  height='3.81476'
                  rx='1'
                  fill='white'
                />
                <rect
                  x='39.4966'
                  y='82.8786'
                  width='17.0235'
                  height='3.81476'
                  rx='1'
                  fill='white'
                />
              </svg>
            )}
            <h2>{formattedPath.length > 0 ? formattedPath : 'Keep'}</h2>
          </Link>
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
      <div className={`${globals.flex} ${globals['a-center']} ${globals['gap-24']}`}>
        <div className={`${globals.flex} ${globals['a-center']} ${styles.icons__group}`}>
          <IconTooltipMolecule
            tooltipProps={{
              text: 'Refresh',
              ariaLabel: 'Refresh',
            }}
            tooltipPosition='center'
            icon={<RefreshOutlinedIcon sx={{ width: '25px', height: '25px' }} />}
          />
          {viewType === 'List' ? (
            <IconTooltipMolecule
              onKeyDown={() => setViewType('Grid')}
              tooltipProps={{
                text: 'List View',
                ariaLabel: 'List View',
              }}
              tooltipPosition='center'
              icon={
                <ViewAgendaOutlinedIcon
                  onClick={() => setViewType('Grid')}
                  sx={{ width: '24px', height: '24px' }}
                />
              }
            />
          ) : (
            <IconTooltipMolecule
              onKeyDown={() => setViewType('List')}
              tooltipProps={{
                text: 'Grid View',
                ariaLabel: 'Grid View',
              }}
              tooltipPosition='center'
              icon={
                <GridViewOutlinedIcon
                  onClick={() => setViewType('List')}
                  sx={{ width: '24px', height: '24px' }}
                />
              }
            />
          )}
          <IconTooltipMolecule
            tooltipProps={{
              text: 'Settings',
              ariaLabel: 'Settings',
            }}
            tooltipPosition='center'
            icon={<SettingsOutlinedIcon sx={{ width: '24px', height: '24px' }} />}
          />
        </div>

        <div
          className={`${globals.flex} ${globals['a-center']} ${styles.icons__group} ${globals['gap-24']}`}
        >
          <IconTooltipMolecule
            tooltipProps={{
              text: 'Google Apps',
              ariaLabel: 'Google Apps',
            }}
            tooltipPosition='center'
            icon={<AppsOutlinedIcon sx={{ width: '25px', height: '25px' }} />}
          />
          <div
            role='button'
            tabIndex={0}
            className={`${styles.profile} ${globals.flex} ${globals['center-items']}`}
          >
            <img src='/images/me.webp' alt='The ArtisticProgrammer' />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavbarOrganisms
