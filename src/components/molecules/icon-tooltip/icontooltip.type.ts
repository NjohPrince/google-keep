import { TooltipProps } from '../../atoms/tooltip/tooltip.type'

export type IconTooltipProps = {
  icon: JSX.Element
  tooltipProps: TooltipProps
  tooltipPosition?: 'left' | 'right' | 'center'
  onKeyDown?: (event?: React.KeyboardEvent) => void
  darker?: boolean
  small?: boolean
  operation?: () => void
}
