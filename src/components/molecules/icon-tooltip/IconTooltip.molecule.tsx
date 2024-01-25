import React from 'react'

import globals from '../../../lib/global/globals.module.css'
import styles from './icontooltip.module.css'

import TooltipAtom from '../../atoms/tooltip/Tooltip.atom'
import { IconTooltipProps } from './icontooltip.type'

const IconTooltipMolecule: React.FC<IconTooltipProps> = ({
  icon,
  tooltipProps,
  tooltipPosition,
  onKeyDown,
}) => {
  return (
    <div
      role='button'
      tabIndex={0}
      onKeyDown={onKeyDown}
      className={`${styles.icon__element} ${globals.flex} ${globals['center-items']}`}
    >
      {icon}
      <div
        className={`${styles.tooltip} ${tooltipPosition === 'left' ? styles.left : tooltipPosition === 'right' ? styles.right : styles.center}}`}
      >
        <TooltipAtom {...tooltipProps} />
      </div>
    </div>
  )
}

export default IconTooltipMolecule