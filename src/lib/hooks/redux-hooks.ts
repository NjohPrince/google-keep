import {
  TypedUseSelectorHook,
  useDispatch as useReduxDispatch,
  useSelector as useReduxSelector,
} from 'react-redux'

import type { AppDispatch, RootState } from '../../app/store/strore'

export const useAppDispatch = () => useReduxDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useReduxSelector
