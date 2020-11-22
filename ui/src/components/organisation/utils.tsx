import { GetOrganisation_az_users_Organisation as OrganisationType } from '../../graphql/query/organisations/types/GetOrganisation'
import * as yup from 'yup'
import { useRouter } from 'next/router'
import React from 'react'
import { useGetOrganisationById } from 'src/graphql/query/organisations/getOrganisationById'
import { NotFoundPage } from '../utils/NotFoundPage'
import { Loading } from '../utils/loading'

type OrganisationKeys = keyof OrganisationType
type OrganisationSchema = Record<OrganisationKeys, any>

const yupRequiredStr = yup.string().required()

export const organisationSchema = yup.object().shape({
  fullName: yupRequiredStr,
  shortName: yupRequiredStr,
  country: yupRequiredStr,
  organisationRole: yupRequiredStr,
  registryLink: yup.string().url(),
  documentId: yup.number(),
  rntrc: yup.number().required().min(8)
} as OrganisationSchema)

export type OrganisationProps = {
  organisation: OrganisationType
}

export const withLoadOrganisationFromUrl = (Component: React.ComponentType<OrganisationProps>) => {
  return () => {
    const { query: { organisationId }} = useRouter()

    console.log('organisationId', organisationId)

    const { data, loading, error } = useGetOrganisationById(parseInt(organisationId as string))

    console.log('DAuseGetOrganisationByIdTA', data)
  
    if (error) return null
  
    if (loading) return <Loading />
  
    const organisation = data?.az_users_Organisation.pop()

    console.log(organisation)

    if (!organisation) return <NotFoundPage />

    return <Component organisation={organisation} />
  }
}