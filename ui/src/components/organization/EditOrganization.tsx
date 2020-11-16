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
import { useUpdateOrganization } from 'src/graphql/query/organizations/updateOrganization';
import { useRouter } from 'next/router';
import { Page } from '../utils/Page';
import { OrganizationProps, organizationSchema, withLoadOrganizationFormUrl } from './utils';
import { DocumentLoader } from '../forms/File';
import { document_type } from 'src/types/graphql-global-types';
import { fillInitValues } from '../utils';
import { EditButton } from '../utils/EditButton';
import { MutationTuple } from '@apollo/react-hooks';
import { AddOrganization, AddOrganizationVariables } from 'src/graphql/query/organizations/types/AddOrganization';
import { UpdateOrganization, UpdateOrganizationVariables } from 'src/graphql/query/organizations/types/UpdateOrganization';

type Error = {
  message: string
}
const getErrorMsg = (error?: Error) => error?.message

type OrganizationForm = Partial<OrganizationProps> & {
  useUpset: (id?: number) => MutationTuple<AddOrganization | UpdateOrganization, AddOrganizationVariables | UpdateOrganizationVariables>
}

const messages = {
  new: {
    title: 'Додати організацію',
  },
  edit: {
    title: 'Редагувати дані організації'
  }
}

export const InnerEditOrganization = ({ organization, useUpset }: OrganizationForm) => {
  const formType = organization ? 'edit' : 'new'

  const [ upsetOrganizations ] = useUpset(organization.organisationId)
  const [ loading, setLoading ] = useState(false)
  const router = useRouter()

  const { register, handleSubmit, errors, setValue } = useForm({
    resolver: yupResolver(organizationSchema)
  })

  useEffect(() => {
    if (formType === 'new') return

    fillInitValues(organization, setValue)
  })

  const onSubmit = useCallback(async organizationData => {
    setLoading(true)
    try {
      const { errors, data } = await upsetOrganizations({ variables: {
        ...organizationData
      }})

      if (errors) throw errors
  
      setLoading(false)
      const organisationId = (data as AddOrganization)?.insert_az_users_Organisation.returning[0].organisationId || organization.organisationId
      router.push(`/organizations/${organisationId}`)
    } catch (error) {
      console.error(error)
      setLoading(false)
    }
  }, [ upsetOrganizations ])

  const SubmitButton = useCallback(() => loading
    ? <EuiLoadingSpinner size='m' />
    : <EuiButton type="submit" fill>
      {messages[formType].title}
    </EuiButton>
  , [ loading ])

  return (
    <Page title={messages[formType].title}>
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
          <DocumentLoader documentType={document_type.User} onChange={(fileId) => fileId && setValue('documentId', fileId)} />
        </EuiFormRow>

        <EuiSpacer />
        <SubmitButton />

      </EuiForm>
    </Page>

  );
};

export const NewOrganization = () => <InnerEditOrganization useUpset={useAddOrganization} />
export const EditOrganization = withLoadOrganizationFormUrl(() => <InnerEditOrganization useUpset={useUpdateOrganization} />)
export const EditOrganizationButton = ({ organization: { organisationId } }: OrganizationProps) =>  <EditButton id={organisationId} typeEdit='organisations' />