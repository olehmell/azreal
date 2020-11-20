import React, { useCallback, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import {
  EuiButton,
  EuiFieldText,
  EuiForm,
  EuiFormRow,
  EuiSpacer,
  EuiFieldNumber,
  EuiLoadingSpinner,
  EuiFormErrorText,
} from '@elastic/eui'

import { useRouter } from 'next/router'
import { Page } from '../utils/Page'
import { OrganisationProps, organisationSchema, withLoadOrganisationFromUrl } from './utils'
import { DocumentLoader } from '../forms/File'
import { fillInitValues, getErrorMsg } from '../utils'
import { EditButton } from '../utils/EditButton'
import { AddOrganisation } from 'src/graphql/query/organisations/types/AddOrganisation'
import { useUpsetOrganisation } from 'src/graphql/query/organisations/upsertOrganisation'
import { az_docs_enum_document_type_enum } from 'src/types/graphql-global-types'

type OrganisationForm = Partial<OrganisationProps>

const messages = {
  new: {
    title: 'Додати організацію',
  },
  edit: {
    title: 'Редагувати дані організації'
  }
}

export const InnerEditOrganisation = ({ organisation }: OrganisationForm) => {
  const formType = organisation ? 'edit' : 'new'

  const [ upsetOrganisations ] = useUpsetOrganisation(organisation?.organisationId)
  const [ loading, setLoading ] = useState(false)
  const router = useRouter()

  const { register, handleSubmit, errors, setValue } = useForm({
    resolver: yupResolver(organisationSchema)
  })

  useEffect(() => {
    if (formType === 'new') return

    fillInitValues(organisation, setValue)
  })

  const onSubmit = useCallback(async organisationData => {
    console.log('organisationData', organisationData)
    setLoading(true)
    try {
      const { errors, data } = await upsetOrganisations({ variables: {
        ...organisationData
      }})

      if (errors) throw errors
  
      setLoading(false)
      const organisationId = (data as AddOrganisation)?.insert_az_users_Organisation_one.organisationId || organisation.organisationId
      router.push(`/organisations/${organisationId}`)
    } catch (error) {
      console.error(error)
      setLoading(false)
    }
  }, [ upsetOrganisations ])

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
            placeholder="00000000"
            inputRef={register}
            fullWidth
            required
          />
        </EuiFormRow>
        <EuiFormErrorText>{getErrorMsg(errors.rntrc)}</EuiFormErrorText>

        <EuiFormRow label="Файл організації" fullWidth>
          <DocumentLoader documentType={az_docs_enum_document_type_enum.Organisation} onChange={(fileId) => fileId && setValue('documentId', fileId)} />
        </EuiFormRow>

        <EuiSpacer />
        <SubmitButton />

      </EuiForm>
    </Page>

  )
}

export const NewOrganisation = InnerEditOrganisation
export const EditOrganisation = withLoadOrganisationFromUrl(InnerEditOrganisation)
export const EditOrganisationButton = ({ organisation: { organisationId } }: OrganisationProps) => <EditButton id={organisationId} typeEdit='organisations' />