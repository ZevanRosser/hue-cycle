import {Dimensions} from 'react-native'

// ui
export const ANIMATION_TIMINGS = {
  FAST: 125,
  MEDIUM: 250,
  SLOW: 500
}
export const COLORS = {
  BLACK: '#000000',
  BLUE: '#4EBFE5',
  DARK_GRAY: '#161a25',
  GREEN: '#9ED267',
  LIGHT_GRAY: '#8E8E93',
  PURPLE: '#AA90E8',
  RED: '#EA5463',
  WHITE: '#FFFFFF',
  YELLOW: '#FCCC53'
}
export const FONT_FAMILY = 'Brandon Text'
export const FONT_SIZE = {
  SMALL: 12,
  MEDIUM: 18,
  LARGE: 24
}
export const GUTTER = 30
export const LAYOUT = {
  BODY_WIDTH_PERCENT: 62,
  HEIGHT: Dimensions.get('window').height,
  WIDTH: Dimensions.get('window').width
}
export const TOAST = {
  ALERT: 'alert',
  INFO: 'info',
  SUCCESS: 'success'
}
export const ZINDEX = {
  SPLASH: 2,
  TOAST: 3
}

// client
export const ACCESS_TOKEN = 'access_token'
export const CLIENT_ID = 'client_id'
export const CLIENT_SECRET = 'client_secret'

// api
export const ACCESS_TOKEN_HEADER = 'x-access-token'
export const API_BASE = 'https://huecycle.nicholasodonnell.com/api'
