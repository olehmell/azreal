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
  EuiCallOut,
} from '@elastic/eui';

import { useAddOrganization } from 'src/graphql/query/organizations/addOrganization';
import { useRouter } from 'next/router';
import { Page } from '../utils/Page';
import { organizationSchema } from './utils';
import { DocumentLoader } from '../forms/File';

type Error = {
  message: string
}
const getErrorMsg = (error?: Error) => error?.message

export const NewOrganization = () => {
  const [ addOrganizations, { data: res } ] = useAddOrganization()
  const [ loading, setLoading ] = useState(false)
  const [ error, setError ] = useState('')
  const router = useRouter()

  const { register, handleSubmit, errors, setValue } = useForm({
    resolver: yupResolver(organizationSchema)
  })

  const resOrganizationId = res?.insert_az_users_Organisation.returning[0].organisationId

  const onSubmit = useCallback(async organizationData => {
    setLoading(true)
    try {
      await addOrganizations({ variables: {
        ...organizationData
      }})
      setLoading(false)
    } catch (error) {
      console.error(error)
      setError(error.toString())
      setLoading(false)
    }
  }, [ addOrganizations ])

  const SubmitButton = useCallback(() => loading
    ? <EuiLoadingSpinner size='m' />
    : <EuiButton type="submit" fill>
        Додати датчик
    </EuiButton>
  , [ loading ])

  const AddedAlert = useCallback(() => (error && !resOrganizationId)
    ? <EuiCallOut title="Органіцазію не додано, сталась помилка:" color='danger'>{error}</EuiCallOut>
    : <EuiCallOut title="Органіцазію успішно додано" color='success'>
      <EuiButton
        color="secondary"
        size="s"
        onClick={() => router.push('/organizations/[organizationId]', `/organizations/${resOrganizationId}`)}
      >
          Перейти на сторінку організації
      </EuiButton>
    </EuiCallOut>
  , [ error, resOrganizationId, router ])

  const SubmitPanel = useCallback(() => (error || resOrganizationId)
    ? <AddedAlert />
    : <SubmitButton />
  , [ error, resOrganizationId ])

  return (
    <Page title='Нова організація'>
      <EuiForm component="form" onSubmit={handleSubmit(onSubmit)}>
        <EuiFormRow label="Повна назва організації"fullWidth>
          <EuiFieldText name="fullName" inputRef={register} fullWidth />
        </EuiFormRow>
        <EuiFormErrorText>{getErrorMsg(errors.fullName)}</EuiFormErrorText>

        <EuiFormRow label="Коротка назва" fullWidth>
          <EuiFieldText name="shortName" inputRef={register} fullWidth />
        </EuiFormRow>
        <EuiFormErrorText>{getErrorMsg(errors.shortName)}</EuiFormErrorText>

        <EuiFormRow label="Країна" fullWidth>
          <EuiFieldText name="country" inputRef={register} fullWidth />
        </EuiFormRow>
        <EuiFormErrorText>{getErrorMsg(errors.country)}</EuiFormErrorText>

        <EuiFormRow label="Роль організації" fullWidth>
          <EuiFieldText name="organisationRole" inputRef={register} fullWidth />
        </EuiFormRow>
        <EuiFormErrorText>{getErrorMsg(errors.organisationRole)}</EuiFormErrorText>

        <EuiFormRow label="Єдиний номер платника податку" fullWidth>
          <EuiFieldNumber
            name='rntrc'
            placeholder="0000000000"
            inputRef={register}
            fullWidth
            required
          />
        </EuiFormRow>
        <EuiFormErrorText>{getErrorMsg(errors.rntrc)}</EuiFormErrorText>

        <EuiFormRow label="Файл організації" fullWidth>
          <DocumentLoader documentType='Organisation' onChange={(fileId) => setValue('documentId', fileId)} />
        </EuiFormRow>

        <EuiSpacer />
        <SubmitPanel />

      </EuiForm>
    </Page>

  );
};

export default NewOrganization