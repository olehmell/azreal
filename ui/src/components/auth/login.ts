import { hasuraSecret, loginUrl } from '../utils'
import { Auth_Obj } from './AuthContext'
import axios from 'axios'

export const checkLogin = async (email: string, password: string) => {

  try {

    const { data } = await axios.post(
      `${loginUrl}/login`,
      { email, password }, 
      { headers: { 
        'content-type': 'application/json',
        'cache-control': 'no-cache',
      }}
    )
  
    if (data?.error) throw new Error('Невірний логін або пароль')
  
    return { data: data as Auth_Obj, token: hasuraSecret }
  } catch (error) {
    return { error }
  }
}