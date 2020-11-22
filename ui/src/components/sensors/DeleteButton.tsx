import { EuiButton } from '@elastic/eui'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { useDeleteSensorById } from 'src/graphql/query/sensors/deleteSensor'
import { Loading } from '../utils/loading'


type DeleteButtonProps = {
  sensorId: number
}

export const DeleteButton = ({ sensorId }: DeleteButtonProps) => {
  const [ deleteSensor, { data: res, error, loading } ] = useDeleteSensorById(sensorId)
  const router = useRouter()

  const resId = res?.delete_az_sensors_Sensors.returning[0].sensorId

  useEffect(() => {
    if (!resId) return 

    router.push('/sensors')
  }, [ resId, router ])

  if (error) return null

  if (loading) return <Loading />

  return <EuiButton
    iconType="minusInCircle"
    size="s"
    onClick={() => deleteSensor()}
  >
    Видалити
  </EuiButton>
}