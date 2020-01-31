import AsyncStorage from '@react-native-community/async-storage'

export const get = async key => {
  let value

  try {
    value = await AsyncStorage.getItem(key)
  } catch ({message}) {
    throw new Error(`Could not get ${key} from storage. Got ${message}.`)
  }

  return value
}

export const remove = async key => {
  try {
    await AsyncStorage.removeItem(key)
  } catch ({message}) {
    throw new Error(`Could not remove ${key} from storage. Got ${message}.`)
  }
}

export const set = async (key, value = null) => {
  try {
    await AsyncStorage.setItem(key, value)
  } catch ({message}) {
    throw new Error(`Could not set ${key} to storage. Got ${message}.`)
  }
}
