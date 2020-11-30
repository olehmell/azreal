import React, { useCallback, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { sha256 } from 'crypto-hash'

import {
  EuiButton,
  EuiFieldText,
  EuiForm,
  EuiFormRow,
  EuiSpacer,
  EuiFieldNumber,
  EuiLoadingSpinner,
  EuiFormErrorText,
  EuiFieldPassword,
  EuiButtonEmpty,
  EuiFlexItem,
  EuiCopy,
} from '@elastic/eui'

import { useRouter } from 'next/router'
import { Page } from '../utils/Page'
import { getFiledName, UserProps, userSchema, withLoadMyUser, withLoadUserFromUrl } from './utils'
import { fillInitValues, getErrorMsg } from '../utils'
import { EditButton } from '../utils/EditButton'
import { useUpsetUser } from 'src/graphql/query/users/upsetUser'
import { UserRoleSelect } from './UserRoleSelect'
import { OrganisationSelect } from './OrganisationSelect'
import generatePassword from 'password-generator'
import { useNotification } from '../utils/Notifications'
import { useAuthObj, useIsManagerAccess } from '../auth/AuthContext'

type UserForm = Partial<UserProps>

const messages = {
  new: {
    title: 'Додати користувача',
  },
  edit: {
    title: 'Редагувати дані користувача'
  }
}

export const InnerEditUser = ({ user }: UserForm) => {
  const formType = user ? 'edit' : 'new'
  const isNew = formType === 'new'
  const [ upsetUsers ] = useUpsetUser(user?.userId)
  const [ loading, setLoading ] = useState(false)
  const router = useRouter()
  const { addToast } = useNotification()
  const isManager = useIsManagerAccess()

  const { register, handleSubmit, errors, setValue } = useForm({
    resolver: yupResolver(userSchema)
  })

  useEffect(() => {
    if (isNew) {
      setValue(getFiledName('password'), generatePassword(12, false))
    } else {
      fillInitValues(user, setValue)
    }
  })

  const onSubmit = useCallback(async userData => {
    setLoading(true)
    try {
      const password = await (await sha256(userData.password)).toString()
      console.log('password', password)
      const { errors, data } = await upsetUsers({ variables: {
        ...userData,
        password
      }})

      if (errors) throw errors
  
      setLoading(false)
      const userId = data.insert_az_users_AuthData_one.userId || user.userId
      isNew && await addToast({ 
        title: 'Незабудьте пароль!',
        color: 'success',
        text: <EuiFlexItem>
          Цей пароль потрібний для входу у систему для створеного користувача, не забудьте передати його!
          <EuiFieldPassword type='dual' value={userData.password} readOnly fullWidth />
          <EuiCopy textToCopy={userData.password}>
            {(copy) => (
              <EuiButton onClick={copy}>Скопіювати</EuiButton>
            )}
          </EuiCopy>
        </EuiFlexItem>
      })
      router.push('/users/[userId]', `/users/${userId}`)
    } catch (error) {
      console.error(error)
      setLoading(false)
    }
  }, [ upsetUsers ])

  const SubmitButton = useCallback(() => loading
    ? <EuiLoadingSpinner size='m' />
    : <EuiButton type="submit" fill>
      {messages[formType].title}
    </EuiButton>
  , [ loading ])

  const PasswordInput = useCallback(() => isNew ? <>
    <EuiFormRow label="Пароль користувача" fullWidth>
      <EuiFieldPassword name={getFiledName('password')} required type='dual' inputRef={register} fullWidth />
    </EuiFormRow>
    <EuiFormErrorText>{getErrorMsg(errors[getFiledName('password')])}</EuiFormErrorText>
  </> : <EuiButtonEmpty href='/password-change'>Змінити пароль</EuiButtonEmpty>, [ isNew ])

  return (
    <Page title={messages[formType].title}>
      <EuiForm component="form" onSubmit={handleSubmit(onSubmit)}>
        <EuiFormRow label="Прізвище ім'я по-батькові"fullWidth>
          <EuiFieldText name={getFiledName('fullName')} inputRef={register} required fullWidth />
        </EuiFormRow>
        <EuiFormErrorText>{getErrorMsg(errors[getFiledName('fullName')])}</EuiFormErrorText>

        <EuiFormRow label="Email" fullWidth>
          <EuiFieldText name={getFiledName('email')} inputRef={register} disabled={!isManager} required fullWidth />
        </EuiFormRow>
        <EuiFormErrorText>{getErrorMsg(errors[getFiledName('email')])}</EuiFormErrorText>

        <EuiFormRow label="Номер телефону" fullWidth>
          <EuiFieldText
            name={getFiledName('phoneNumber')}
            placeholder="+380(000)0000000"
            inputRef={register}
            fullWidth
          />
        </EuiFormRow>
        <EuiFormErrorText>{getErrorMsg(errors[getFiledName('phoneNumber')])}</EuiFormErrorText>

        <EuiFormRow label="Рівень доступу користувача" fullWidth>
          <UserRoleSelect disabled={!isManager} name={getFiledName('userRole')} required inputRef={register} fullWidth />
        </EuiFormRow>
        <EuiFormErrorText>{getErrorMsg(errors[getFiledName('userRole')])}</EuiFormErrorText>

        <EuiFormRow label="Організація" fullWidth>
          <OrganisationSelect disabled={!isManager} name={getFiledName('organisationId')} inputRef={register} fullWidth />
        </EuiFormRow>
        <EuiFormErrorText>{getErrorMsg(errors[getFiledName('organisationId')])}</EuiFormErrorText>

        <PasswordInput />

        <EuiSpacer />
        <SubmitButton />

      </EuiForm>
    </Page>

  )
}

export const NewUser = InnerEditUser
export const EditUser = withLoadUserFromUrl(InnerEditUser)
export const EditMyUser = withLoadMyUser(InnerEditUser)
export const EditUserButton = ({ user: { userId } }: UserProps) => <EditButton id={userId} typeEdit='users' />