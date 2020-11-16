import { graphqlUrl, hasuraSecret } from '../utils'
import { Auth_Obj } from './AuthContext'

export const checkLogin = async (email: string, password: string) => {

  try {
    const config = {
      'method': 'POST',
      'headers': {
        'x-hasura-admin-secret': 'azrealadmin',
        'content-type': 'application/json',
        'cache-control': 'no-cache',
      },
      'processData': false,
      'body': `{\n  "query": "query CheckLogin($email: String, $password: String) { az_users_Users(where: {email: {_eq: $email}, AuthDatum: {password: {_eq: $password}}}) { userId userRole } } ",\n  "operationName": "CheckLogin",\n  "variables": { "email": \"${email}\", "password": \"${password}\" }\n}`
    }

    const res = await fetch('https://azreal-hasura.hasura.app/v1/graphql', config)
  
    const data = await res.json()
  
    return { data: { ...data?.data.az_users_Users[0], token: hasuraSecret } as Auth_Obj }
  } catch (error) {
    return { error }
  }
}