import React, { FunctionComponent, useState } from 'react'
import {
  EuiButton,
  EuiContextMenuItem,
  EuiContextMenuPanel,
  EuiIcon,
  EuiPopover,
  EuiSwitch,
} from '@elastic/eui'

import { setInitialTheme, setTheme, Theme, themeConfig } from '../../lib/theme'

const initialTheme = setInitialTheme()

/**
 * Renders a dropdown menu for selecting the current theme. The selection
 * is set in localStorage, so that it persists between visits.
 */

type ThemeType = 'dark' | 'light'

const THEME = 'theme'

const isClientSide = () => typeof window !== 'undefined' 

export const getThemeFromStore = () => ((isClientSide() && localStorage?.getItem(THEME)) || initialTheme) as ThemeType

const setThemeToStore = (theme: ThemeType) => isClientSide() && localStorage?.setItem(THEME, theme)

const SwitchTheme: FunctionComponent = () => {
  const [ themeType, setThemeType ] = useState<ThemeType>(getThemeFromStore())

  const isDark = themeType === 'dark'

  const handleChangeTheme = (newTheme: ThemeType) => {
    setTheme(newTheme)
    setThemeType(newTheme)
    setThemeToStore(newTheme)
  }

  return <EuiSwitch
    label={`${isDark ? 'Темна' : 'Світла'} тема`}
    checked={isDark}
    onChange={(e) => handleChangeTheme(e.target.checked ? 'dark' : 'light')}
    compressed
  />

}

export default SwitchTheme
