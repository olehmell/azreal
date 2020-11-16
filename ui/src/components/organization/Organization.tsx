import { EuiBadge, EuiDescriptionList, EuiFlexGroup, EuiFlexItem, EuiStat } from "@elastic/eui"
import React from "react"
import { MapContainer, Marker, Popup } from "react-leaflet"
import { createDescItem } from "../utils"
import { ButtonLink } from "../utils/ButtonLink"
import { parseLatLngTuple, titleLayer } from "../utils/Map"
import { Page } from "../utils/Page"
import { DeleteButton } from "./DeleteButton"
import { EditOrganizationButton } from "./EditOrganization"
import { OrganizationProps, withLoadOrganizationFormUrl } from "./utils"

const OrganizationDesc = ({
  organization
}: OrganizationProps) => {
  const {
    shortName,
    registryLink,
    rntrc,
    organisationRole,
    documentId
  } = organization

  const items = [
    createDescItem('Коротка назва', shortName),
    createDescItem('Єдиний номер платника податку', rntrc),
    createDescItem('Посилання на реєстр', <a href={registryLink}>{registryLink}</a>),
    createDescItem('Опис ролі організації', organisationRole),
    createDescItem('Файли', documentId)
  ].filter(x => x !== undefined)

  return <EuiDescriptionList textStyle="reverse" listItems={items} />
}

export const ViewOrganization = ({ organization }: OrganizationProps) => {
  return <EuiFlexGroup>
    <EuiFlexItem>
      <OrganizationDesc organization={organization} />
    </EuiFlexItem>
    <EuiFlexItem>
    </EuiFlexItem>
  </EuiFlexGroup>
}


export const Organization = ({ organization }: OrganizationProps) => {
  return <Page title={<EuiFlexGroup justifyContent='spaceBetween'>
    <EuiFlexItem>{organization.fullName}</EuiFlexItem>
    <EuiFlexGroup alignItems='center'>
      <EuiFlexItem>
        <EditOrganizationButton organization={organization} />
      </EuiFlexItem>
      <EuiFlexItem>
        <DeleteButton organisationId={organization.organisationId} />
      </EuiFlexItem>
    </EuiFlexGroup>
  </EuiFlexGroup>
  }>
    <ViewOrganization organization={organization} />
  </Page>
}

export default withLoadOrganizationFormUrl(Organization);