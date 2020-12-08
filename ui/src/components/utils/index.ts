
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

export const fillInitValues = <T>(data: T, setValue: (key, value) => void) => {
  for (const key in data) {
    const value = data[key]
    setValue(key, value)
  }
}

export const createHasuraArray = (ids: string[]) => `{${ids.map(id => `"${id}"`).join(',')}}`

type Error = {
  message: string
}

export const getErrorMsg = (error?: Error) => error?.message || error?.toString()

export const findErrors = (errorByKey: Record<string, Error>) => {
  const errors = []
  for (const key in errorByKey) {
    const error = errorByKey[key]

    if (error) {
      errors.push(error)
    }
  }

  return errors as Error[]
}

require('dotenv').config()

function getEnv (varName: string): string | undefined {
  const { env } = typeof window === 'undefined' ? process : window.process
  return env[varName]
}

export const apikey = getEnv('AIRLY_API_KEY')
export const graphqlUrl = getEnv('GRAPHQL_URL')
export const mongoUrl = getEnv('MONGO_URL')
export const loginUrl = getEnv('LOGIN_URL')
export const hasuraSecret = getEnv('SECRET')
export const aggregationLimit = getEnv('AGGREGATION_LIMIT') || 100