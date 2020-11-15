import { GetOrganization_az_users_Organisation as OrganizationType } from './../../graphql/query/organizations/types/GetOrganization';
import * as yup from 'yup'

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
} as OrganizationSchema);
