import { GetOrganization_az_users_Organisation as OrganizationType } from '../../graphql/query/organizations/types/GetOrganization'
import * as yup from 'yup'
import { useRouter } from 'next/router'
import React from 'react'
import { useGetOrganizationById } from 'src/graphql/query/organizations/getOrganizationById'
import { NotFoundPage } from '../utils/NotFoundPage'
import { Loading } from '../utils/loading'

type OrganizationKeys = keyof OrganizationType
type OrganizationSchema = Record<OrganizationKeys, any>

const yupRequiredStr = yup.string().required()

export const organizationSchema = yup.object().shape({
  fullName: yupRequiredStr,
  shortName: yupRequiredStr,
  country: yupRequiredStr,
  organisationRole: yupRequiredStr,
  registryLink: yup.string().url().required(),
  documentId: yup.number(),
  rntrc: yup.number().required().min(10)
} as OrganizationSchema)

export type OrganizationProps = {
  organization: OrganizationType
}

export const withLoadOrganizationFormUrl = (Component: React.ComponentType<OrganizationProps>) => {
  return () => {
    const { query: { organizationId }} = useRouter()
    const { data, loading, error } = useGetOrganizationById(parseInt(organizationId as string))

    console.log('DAuseGetOrganizationByIdTA', data)
  
    if (error) return null
  
    if (loading) return <Loading />
  
    const organization = data?.az_users_Organisation.pop()

    if (!organization) return <NotFoundPage />

    return <Component organization={organization} />
  }
}