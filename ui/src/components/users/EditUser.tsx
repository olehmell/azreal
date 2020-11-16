import React, { useCallback, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';

import {
  EuiButton,
  EuiFieldText,
  EuiForm,
  EuiFormRow,
  EuiSpacer,
  EuiFieldNumber,
  EuiLoadingSpinner,
  EuiFormErrorText,
} from '@elastic/eui';

import { useRouter } from 'next/router';
import { Page } from '../utils/Page';
import { getFiledName, UserProps, userSchema, withLoadUserFormUrl } from './utils';
import { fillInitValues } from '../utils';
import { EditButton } from '../utils/EditButton';
import { useUpsetUser } from 'src/graphql/query/users/upsetUser';

type Error = {
  message: string
}

const getErrorMsg = (error?: Error) => error?.message

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

  const [ upsetUsers ] = useUpsetUser(user.userId)
  const [ loading, setLoading ] = useState(false)
  const router = useRouter()

  const { register, handleSubmit, errors, setValue } = useForm({
    resolver: yupResolver(userSchema)
  })

  useEffect(() => {
    if (formType === 'new') return

    fillInitValues(user, setValue)
  })

  const onSubmit = useCallback(async userData => {
    setLoading(true)
    try {
      const { errors, data } = await upsetUsers({ variables: {
        ...userData
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
          <EuiFieldText name={getFiledName('userRole')} inputRef={register} fullWidth />
        </EuiFormRow>
        <EuiFormErrorText>{getErrorMsg(errors.getFiledName('userRole'))}</EuiFormErrorText>

        <EuiSpacer />
        <SubmitButton />

      </EuiForm>
    </Page>

  );
};

export const NewUser = InnerEditUser
export const EditUser = withLoadUserFormUrl(InnerEditUser)
export const EditUserButton = ({ user: { userId } }: UserProps) =>  <EditButton id={userId} typeEdit='users' />