import {request} from 'utils'
import {
  ACCESS_TOKEN_HEADER,
  API_BASE,
  ACCESS_TOKEN,
  CLIENT_ID,
  CLIENT_SECRET
} from 'constants'

export const getBridge = async accessToken => {
  const {bridge = {}, message, successful} = await request({
    headers: {
      [ACCESS_TOKEN_HEADER]: accessToken
    },
    method: 'GET',
    url: `${API_BASE}/bridge`
  })

  if (!successful) {
    throw new Error(`Could not fetch Hue Bridge. Got ${message}.`)
  }

  return bridge
}

export const login = async (clientId, clientSecret) => {
  const {
    [ACCESS_TOKEN]: accessToken = null,
    message,
    successful
  } = await request({
    data: {
      [CLIENT_ID]: clientId,
      [CLIENT_SECRET]: clientSecret
    },
    url: `${API_BASE}/login`
  })

  if (!successful) {
    throw new Error(`Could not login. Got ${message}.`)
  }

  return accessToken
}
