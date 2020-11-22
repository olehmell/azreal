import { EuiButton } from '@elastic/eui'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { useDeleteOrganisation } from 'src/graphql/query/organisations/deleteOrganisation'
import { Loading } from '../utils/loading'


type DeleteButtonProps = {
  organisationId: number
}

export const DeleteButton = ({ organisationId }: DeleteButtonProps) => {
  const [ deleteOrganisation, { data: res, error, loading } ] = useDeleteOrganisation(organisationId)
  const router = useRouter()

  const deleteRows = res?.delete_az_users_Organisation.affected_rows || 0

  useEffect(() => {
    if (!deleteRows) return 

    router.push('/organisations')
  }, [ deleteRows, router ])

  if (error) return null

  if (loading) return <Loading />

  return <EuiButton
    iconType="minusInCircle"
    size="s"
    onClick={() => deleteOrganisation()}
  >
    Видалити
  </EuiButton>
}