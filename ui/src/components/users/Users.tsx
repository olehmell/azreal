import { EuiDataGridColumn, EuiSpacer } from "@elastic/eui"
import Link from "next/link"
import React from "react"
import { useGetUsers } from "src/graphql/query/users/getUsers"
import { GetUsers_az_users_Users as UsersType } from "src/graphql/query/users/types/GetUsers"
import { DataGrid } from "../utils/DataGrid"
import { Loading } from "../utils/loading"
import { Page } from "../utils/Page"
import { NotFound } from "../utils/NotFoundPage"

type ViewUsersProps = {
  users: UsersType[]
}

type UserColumn = Omit<EuiDataGridColumn, 'id'> & {
  id: keyof UsersType
}

const ViewUsers = ({ users }: ViewUsersProps) => {
  const columns: UserColumn[] = [ {
    id: 'fullName',
    display: 'Назва організації',
  },
  {
    id: 'email',
    display: 'Коротка назва'
  },
  {
    id: 'phoneNumber',
    display: 'Країна'
  },
  {
    id: 'userRole',
    display: 'Код платника податків'
  },
  {
    id: 'Organisation',
    display: 'Організація'
  }
  ]

  const data = users.map(({ 
    fullName,
    email,
    userId,
    phoneNumber,
    userRole,
    Organisation: {
      organisationId,
      shortName,
      fullName: organizationFullName
    }
  }) => ({
    fullName: <Link href='/users/[sensorId]' as={`/users/${userId}`}><a>{fullName}</a></Link>,
    email,
    phoneNumber,
    Organisation: <Link href='/organisations/[organisationId]' as={`/organisations/${organisationId}`}><a>{shortName || organizationFullName}</a></Link>,
    userRole
  }))

  return <DataGrid columns={columns} data={data} />
}

export const Users = () => {
  const { data, loading, error } = useGetUsers()

  if (error) return null

  if (loading) return <Loading />

  const users = data.az_users_Users

  if (!users.length) return <NotFound message='Немає користувачів'/>

  return <Page
    title='Користувачі'
  >
    <ViewUsers users={users} />
  </Page>
}

export default Users