import {Dimensions} from 'react-native'

// ui
export const ANIMATION_TIMINGS = {
  XFAST: 50,
  FAST: 125,
  MEDIUM: 250,
  SLOW: 500,
  XSLOW: 1500
}
export const COLORS = {
  BLACK: '#000000',
  BLUE: '#3B82F6',
  DARK_GRAY: '#222',
  GRAY: '#5A5A5E',
  GREEN: '#67CE69',
  LIGHT_BLUE: '#89C1F9',
  LIGHT_PINK: '#EE9FBE',
  LIGHT_PURPLE: '#AE80F2',
  LIGHT_RED: '#EB5D7A',
  ORANGE: '#FF8F06',
  PINK: '#F049CB',
  PURPLE: '#5D5CDE',
  RED: '#EB5545',
  TRANSPARENT_GRAY: 'rgba(255, 255, 255, 0.5)',
  WHITE: '#FFFFFF',
  YELLOW: '#FCCC53'
}
export const COLOR_DOT_SIZE = 55
export const FONT_FAMILY = 'Brandon Text'
export const FONT_SIZE = {
  SMALL: 12,
  MEDIUM: 18,
  LARGE: 24,
  XLARGE: 50
}
export const GUTTER = 30
export const LAYOUT = {
  HEIGHT: Dimensions.get('window').height,
  WIDTH: Dimensions.get('window').width
}
export const SCENE_BODY_HEIGHT_PERCENT = 65
export const SCENE_HEADER_EXPANDED_HEIGHT =
  LAYOUT.HEIGHT * ((100 - SCENE_BODY_HEIGHT_PERCENT) / 100)
export const SCENE_HEADER_COLLAPSED_HEIGHT = 120
export const SCENE_NAME_MAX_LENGTH = 12
export const SCREENS = {
  SCENE: 'scene',
  SCENES: 'scenes',
  SETTINGS: 'settings',
  SETUP: 'setup'
}
export const SPACE_AROUND_GUTTER = 3
export const TOAST = {
  ALERT: 'alert',
  INFO: 'info',
  SUCCESS: 'success'
}
export const TOGGLE_BUTTON_SIZE = 75
export const ZINDEX = {
  BODY: 1,
  HEADER: 2,
  SPLASH: 3,
  TOAST: 4
}

// state
export const INITIAL_STATE = {
  connected: false,
  initialized: false,
  loading: false,
  navigation: {
    activeScreen: null,
    previousScreen: null
  },
  scenes: [
    {
      active: false,
      behavior: {},
      colors: [
        {
          color: COLORS.RED,
          selected: true
        },
        {
          color: COLORS.LIGHT_RED,
          selected: false
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
          color: COLORS.BLUE,
          selected: true
        },
        {
          color: COLORS.LIGHT_BLUE,
          selected: false
        },
        {
          color: COLORS.PURPLE,
          selected: false
        },
        {
          color: COLORS.LIGHT_PURPLE,
          selected: false
        },
        {
          color: COLORS.PINK,
          selected: false
        },
        {
          color: COLORS.LIGHT_PINK,
          selected: false
        }
      ],
      id: 1,
      lights: [],
      name: 'Scene 1',
      selected: true
    }
  ],
  toasts: []
}

// client
export const STORAGE_KEYS = {
  CLIENT_ID: 'client_id',
  CLIENT_SECRET: 'client_secret'
}

// api
export const ACCESS_TOKEN_HEADER = 'x-access-token'
export const API_BASE = 'https://huecycle.nicholasodonnell.com/api'
