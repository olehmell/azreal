import * as yup from 'yup'

export const serviceLogSchema = yup.object().shape({
  sensorId: yup.number().required(),
  timestamp: yup.date().required(),
  serviceType: yup.string().required(),
  documentId: yup.number().required(),
  locationId: yup.number().required(),
  photoId: yup.number().required()
})
