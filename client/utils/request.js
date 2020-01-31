import axios from 'axios'
import uuid from 'uuid'

export default async ({
  data = {},
  headers = {},
  method = 'POST',
  params,
  url
}) => {
  const requestUuid = uuid.v4()

  try {
    const response = await axios({
      data,
      headers: {
        ...headers,
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'x-request-uuid': requestUuid
      },
      method,
      params,
      url
    })

    const {data: responseData = {}} = response
    const {message = null, successful = false} = responseData

    return {
      ...responseData,
      message,
      requestUuid,
      successful
    }
  } catch ({message}) {
    return {
      message,
      requestUuid,
      successful: false
    }
  }
}
