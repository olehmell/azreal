import { useMutation } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'
import { DeleteOrganization, DeleteOrganizationVariables } from './types/DeleteOrganization'

const DELETE_ORGANIZATION = gql`
  mutation DeleteOrganization($id: Int) {
    delete_az_users_Organisation(where: {organisationId: {_eq: $id}}) {
      affected_rows
    }
  }
`
export const useDeleteOrganization = (id: number) => useMutation<DeleteOrganization, DeleteOrganizationVariables>(DELETE_ORGANIZATION, { variables: { id }})
