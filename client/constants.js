import {Dimensions} from 'react-native'

// ui
export const ANIMATION_TIMINGS = {
  FAST: 125,
  MEDIUM: 250,
  SLOW: 500
}
export const BODY_HEIGHT_PERCENT = 62
export const COLORS = {
  BEIGE: '#C3A77B',
  BLACK: '#000000',
  BLUE: '#3B82F6',
  GRAY: '#5A5A5E',
  GREEN: '#67CE69',
  LIGHT_BLUE: '#89C1F9',
  LIGHT_PINK: '#E2B7B0',
  LIGHT_RED: '#EB5D7A',
  ORANGE: '#F1A33C',
  PINK: '#C983EE',
  PURPLE: '#5D5CDE',
  RED: '#EB5545',
  WHITE: '#FFFFFF',
  YELLOW: '#FCCC53'
}
export const COLOR_DOT_SIZE = 55
export const FONT_FAMILY = 'Brandon Text'
export const FONT_SIZE = {
  SMALL: 12,
  MEDIUM: 18,
  LARGE: 24
}
export const GUTTER = 30
export const LAYOUT = {
  HEIGHT: Dimensions.get('window').height,
  WIDTH: Dimensions.get('window').width
}
export const SPACE_AROUND_GUTTER = 3
export const TOAST = {
  ALERT: 'alert',
  INFO: 'info',
  SUCCESS: 'success'
}
export const ZINDEX = {
  SPLASH: 2,
  TOAST: 3
}

// state
export const INITIAL_STATE = {
  colors: [
    {
      color: COLORS.RED,
      selected: true
    },
    {
      color: COLORS.ORANGE,
      selected: false
    },
    {
      color: COLORS.YELLOW,
      selected: true
    },
    {
      color: COLORS.GREEN,
      selected: false
    },
    {
      color: COLORS.LIGHT_BLUE,
      selected: false
    },
    {
      color: COLORS.BLUE,
      selected: false
    },
    {
      color: COLORS.PURPLE,
      selected: false
    },
    {
      color: COLORS.LIGHT_RED,
      selected: false
    },
    {
      color: COLORS.PINK,
      selected: true
    },
    {
      color: COLORS.LIGHT_PINK,
      selected: false
    },
    {
      color: COLORS.BEIGE,
      selected: false
    }
  ],
  connected: false,
  loading: true,
  toasts: []
}

// client
export const STORAGE_KEYS = {
  ACCESS_TOKEN: 'access_token',
  CLIENT_ID: 'client_id',
  CLIENT_SECRET: 'client_secret',
  COLORS: 'colors'
}

// api
export const ACCESS_TOKEN_HEADER = 'x-access-token'
export const API_BASE = 'https://huecycle.nicholasodonnell.com/api'
