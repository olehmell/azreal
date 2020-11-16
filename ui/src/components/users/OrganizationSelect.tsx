import { EuiSelect, EuiSelectProps } from "@elastic/eui"
import React from "react"
import { useGetOrganizations } from "src/graphql/query/organizations/getOrganizations";
import { Loading } from "../utils/loading";

export const OrganizationSelect = (props: EuiSelectProps) => {
  const { data, error, loading } = useGetOrganizations()

  if (loading) return <Loading />

  if (error) return null;

  const options = data.az_users_Organisation
    .map(({ organisationId, shortName, fullName }) => ({ value: organisationId, text: shortName || fullName  }))

  return <EuiSelect
    id="role-selector"
    fullWidth
    options={options}
    {...props}
  />
}