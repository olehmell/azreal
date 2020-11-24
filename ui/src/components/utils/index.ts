
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
    console.log('INIT VALUE', key, value)
    setValue(key, value)
  }
}

type Error = {
  message: string
}

export const getErrorMsg = (error?: Error) => error?.message

require('dotenv').config()

export const graphqlUrl = process.env.GRAPHQL_URL
export const mongoUrl = process.env.MONGO_URL
export const loginUrl = process.env.LOGIN_URL
export const hasuraSecret = process.env.SECRET