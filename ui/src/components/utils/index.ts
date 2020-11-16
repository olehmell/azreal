import { ParsedUrlQuery } from 'querystring'

export const createDescItem = (title: string, description?: string | number | React.ReactNode) => description
  ? { 
    title,
    description
  }
  : undefined

export const getIdFromUrlQuery = (queryId: string | string[]) => {
  try {
    return parseInt(queryId as string)
  } catch (err) {
    console.error('Failed parse id from url')
    return 0
  } 
} 

export const fillInitValues = (data: any, setValue: (key, value) => void) => {
  for (const key in data) {
    const value = data[key]
    setValue(key, value)
  }
}

type Error = {
  message: string
}

export const getErrorMsg = (error?: Error) => error?.message

require('dotenv').config()

const getGraphqlUrl = () => {
  const urlFromEnv = process.env.GRAPHQL_URL

  if (!urlFromEnv) throw new Error('Dont find graphql url fron ENV')

  return urlFromEnv
}


export const graphqlUrl = getGraphqlUrl()
export const hasuraSecret = process.env.SECRET