import { graphqlUrl, hasuraSecret } from '../utils'
import { Auth_Obj } from './AuthContext'

export const checkLogin = async (email: string, password: string) => {
  try {
    const query = {
      query: 'query CheckLogin($userId: Int = 0, $password: String = "") { az_users_Users(where: {userId: {_eq: $userId}, AuthDatum: {password: {_eq: $password}}}) { userId userRole } }',
      operationName: 'CheckLogin',
      variables: { 
        email,
        password
      }
    }
  
    const res = await fetch({
      url: graphqlUrl,
      method: 'POST',
      body: JSON.stringify(query), 
      headers: {
        'x-hasura-admin-secret': hasuraSecret,
        'content-type': 'application/json'
      }
    } as any)
  
    const data = await res.json()
  
    console.log('DATA', data, JSON.parse(data))
  
    return { data: { ...JSON.parse(data), token: hasuraSecret } as Auth_Obj }
  } catch (error) {
    return { error }
  }
}