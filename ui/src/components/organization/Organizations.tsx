import { EuiDataGridColumn, EuiSpacer } from '@elastic/eui'
import Link from 'next/link'
import React from 'react'
import { useGetOrganizations } from 'src/graphql/query/organizations/getOrganizations'
import { GetOrganizations_az_users_Organisation as OrganizationsType } from 'src/graphql/query/organizations/types/GetOrganizations'
import { DataGrid } from '../utils/DataGrid'
import { Loading } from '../utils/loading'
import { Page } from '../utils/Page'
import { NotFound } from '../utils/NotFoundPage'

type ViewOrganizationsProps = {
  organizations: OrganizationsType[]
}

type OrganizationColumn = Omit<EuiDataGridColumn, 'id'> & {
  id: keyof OrganizationsType
}

const ViewOrganizations = ({ organizations }: ViewOrganizationsProps) => {
  const columns: OrganizationColumn[] = [ {
    id: 'fullName',
    display: 'Назва організації',
  },
  {
    id: 'shortName',
    display: 'Коротка назва'
  },
  {
    id: 'country',
    display: 'Країна'
  },
  {
    id: 'rntrc',
    display: 'Код платника податків'
  },
  {
    id: 'registryLink',
    display: 'Посилання на реєстр'
  },
  {
    id: 'documentId',
    display: 'Документ'
  } ]

  const data = organizations.map(({ organisationId, organisationRole, shortName, fullName, registryLink, rntrc }) => ({
    fullName: <Link href='/organizations/[sensorId]' as={`/organizations/${organisationId}`}><a>{fullName}</a></Link>,
    shortName,
    organisationRole,
    registryLink: <a href={registryLink}>Перейти</a>,
    rntrc
  }))

  return <DataGrid columns={columns} data={data} />
}

export const Organizations = () => {
  const { data, loading, error } = useGetOrganizations()

  if (error) return null

  if (loading) return <Loading />

  const organizations = data.az_users_Organisation

  if (!organizations.length) return <NotFound message='Не вдалось знайти датчики'/>

  return <Page
    title='Організації'
  >
    <ViewOrganizations organizations={organizations} />
  </Page>
}

export default Organizations