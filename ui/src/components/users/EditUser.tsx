import React, { useCallback, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import * as sha256 from 'fast-sha256'

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
} from '@elastic/eui';

import { useRouter } from 'next/router';
import { Page } from '../utils/Page';
import { getFiledName, UserProps, userSchema, withLoadMyUser, withLoadUserFormUrl } from './utils';
import { fillInitValues, getErrorMsg } from '../utils';
import { EditButton } from '../utils/EditButton';
import { useUpsetUser } from 'src/graphql/query/users/upsetUser';
import { UserRoleSelect } from './UserRoleSelect';
import { OrganizationSelect } from './OrganizationSelect';
import generatePassword from 'password-generator';

type UserForm = Partial<UserProps>

const messages = {
  new: {
    title: 'Додати організацію',
  },
  edit: {
    title: 'Редагувати дані організації'
  }
}

export const InnerEditUser = ({ user }: UserForm) => {
  const formType = user ? 'edit' : 'new'
  const isNew = formType === 'new'
  const [ upsetUsers ] = useUpsetUser(user.userId)
  const [ loading, setLoading ] = useState(false)
  const router = useRouter()

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
      const password = sha256.hash(userData.password).toString()
      console.log(password)
      const { errors, data } = await upsetUsers({ variables: {
        ...userData,
        password
      }})

      if (errors) throw errors
  
      setLoading(false)
      const userId = data.insert_az_users_Users.returning[0].userId || user.userId
      router.push(`/users/${userId}`)
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
      <EuiFieldPassword name={getFiledName('password')} inputRef={register} fullWidth />
    </EuiFormRow>
    <EuiFormErrorText>{getErrorMsg(errors.getFiledName('organisationId'))}</EuiFormErrorText>
  </> : <EuiButtonEmpty href='/password-change'>Змінити пароль</EuiButtonEmpty>, [ isNew ])

  return (
    <Page title={messages[formType].title}>
      <EuiForm component="form" onSubmit={handleSubmit(onSubmit)}>
        <EuiFormRow label="Прізвище ім'я по-батькові"fullWidth>
          <EuiFieldText name={getFiledName('fullName')} inputRef={register} fullWidth />
        </EuiFormRow>
        <EuiFormErrorText>{getErrorMsg(errors[getFiledName('fullName')])}</EuiFormErrorText>

        <EuiFormRow label="Email" fullWidth>
          <EuiFieldText name={getFiledName('email')} inputRef={register} fullWidth />
        </EuiFormRow>
        <EuiFormErrorText>{getErrorMsg(errors[getFiledName('email')])}</EuiFormErrorText>

        <EuiFormRow label="Номер телефону" fullWidth>
          <EuiFieldNumber
            name={getFiledName('phoneNumber')}
            placeholder="+380(000)0000000"
            inputRef={register}
            fullWidth
            required
          />
        </EuiFormRow>
        <EuiFormErrorText>{getFiledName('phoneNumber')}</EuiFormErrorText>

        <EuiFormRow label="Рівень доступу користувача" fullWidth>
          <UserRoleSelect name={getFiledName('userRole')} inputRef={register} fullWidth />
        </EuiFormRow>
        <EuiFormErrorText>{getErrorMsg(errors.getFiledName('userRole'))}</EuiFormErrorText>

        <EuiFormRow label="Організація" fullWidth>
          <OrganizationSelect name={getFiledName('organisationId')} inputRef={register} fullWidth />
        </EuiFormRow>
        <EuiFormErrorText>{getErrorMsg(errors.getFiledName('organisationId'))}</EuiFormErrorText>

        <PasswordInput />

        <EuiSpacer />
        <SubmitButton />

      </EuiForm>
    </Page>

  );
};

export const NewUser = InnerEditUser
export const EditUser = withLoadUserFormUrl(InnerEditUser)
export const EditMyUser = withLoadMyUser(InnerEditUser)
export const EditUserButton = ({ user: { userId } }: UserProps) => <EditButton id={userId} typeEdit='users' />