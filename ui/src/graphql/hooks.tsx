import { useQuery } from '@apollo/react-hooks';
import { Sensors } from '../types';
import { GetSensors } from './query';

export const useSensors = () => {
  const { data, loading } = useQuery<Sensors>(GetSensors)
  return { data: data?.az_sensors_Sensors, loading }
}