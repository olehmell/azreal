import { EuiButton, EuiFieldPassword, EuiFieldText, EuiForm, EuiFormErrorText, EuiFormRow, EuiLoadingSpinner, EuiSpacer } from '@elastic/eui'
import { useRouter } from 'next/router'
import React, { useCallback, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { getErrorMsg } from '../utils'
import CenteredPage from '../utils/CenteredPage'
import { checkLogin } from './login'
import { sha256 } from 'crypto-hash'
import { useAuth } from './AuthContext'

export const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(8).required(),
})

export const Login = () => {
  const { setAuthObj } = useAuth()
  const [ loading, setLoading ] = useState(false)
  const [ error, setError ] = useState('')
  const router = useRouter()

  const { register, handleSubmit, errors } = useForm()

  const onSubmit = async loginData => {
    setLoading(true)
    try {
      const email = loginData.email
      const password = await (await sha256(loginData.password)).toString()

      console.log('password', password)

      const { data, error } = await checkLogin(email, password)
  
      if (error) throw error

      if (data) {
        console.log('data', data)
        setAuthObj(data)
        setLoading(false)
        router.push('/')
      }

    } catch (error) {
      console.error(error.toString())
      setError(error.toString())
      setLoading(false)
    }
  }

  const SubmitButton = useCallback(
    () =>
      loading ? (
        <EuiLoadingSpinner size='m' />
      ) : (
        <EuiButton type='submit' fill fullWidth>
          Увійти
        </EuiButton>
      ),
    [ loading ]
  )

  return (
    <EuiForm component='form' onSubmit={handleSubmit(onSubmit)}>

      <EuiFormRow label="Email" fullWidth>
        <EuiFieldText name={'email'} inputRef={register} fullWidth />
      </EuiFormRow>
      <EuiFormErrorText>{getErrorMsg(errors['email'])}</EuiFormErrorText> 

      <EuiFormRow label="Пароль" fullWidth>
        <EuiFieldPassword name={'password'} inputRef={register} fullWidth type='dual' />
      </EuiFormRow>
      <EuiFormErrorText>{getErrorMsg(errors['password'])}</EuiFormErrorText>
      
      <EuiFormErrorText>{error}</EuiFormErrorText>

      <EuiSpacer />
      <SubmitButton />
    </EuiForm>
  )
}

export const LoginPage = () => {
  return <CenteredPage title='Вхід'>
    <Login />
  </CenteredPage>
}