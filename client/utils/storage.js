import AsyncStorage from '@react-native-community/async-storage'

export const get = async key => AsyncStorage.getItem(key)

export const remove = async key => AsyncStorage.removeItem(key)

export const set = async (key, value = null) => AsyncStorage.setItem(key, value)
