import { EuiBadge, EuiDescriptionList, EuiFlexGroup, EuiFlexItem, EuiStat } from '@elastic/eui'
import React from 'react'
import { MapContainer, Marker, Popup } from 'react-leaflet'
import { createDescItem } from '../utils'
import { ButtonLink } from '../utils/ButtonLink'
import { parseLatLngTuple, titleLayer } from '../utils/Map'
import { Page } from '../utils/Page'
import { DeleteButton } from './DeleteButton'
import { EditOrganisationButton } from './EditOrganisation'
import { OrganisationProps, withLoadOrganisationFromUrl } from './utils'

const OrganisationDesc = ({
  organisation
}: OrganisationProps) => {
  const {
    shortName,
    registryLink,
    rntrc,
    organisationRole,
    documentId
  } = organisation

  const items = [
    createDescItem('Коротка назва', shortName),
    createDescItem('Єдиний номер платника податку', rntrc),
    createDescItem('Посилання на реєстр', <a href={registryLink}>{registryLink}</a>),
    createDescItem('Опис ролі організації', organisationRole),
    createDescItem('Файли', documentId)
  ].filter(x => x !== undefined)

  return <EuiDescriptionList textStyle="reverse" listItems={items} />
}

export const ViewOrganisation = ({ organisation }: OrganisationProps) => {
  return <EuiFlexGroup>
    <EuiFlexItem>
      <OrganisationDesc organisation={organisation} />
    </EuiFlexItem>
    <EuiFlexItem>
    </EuiFlexItem>
  </EuiFlexGroup>
}


export const Organisation = ({ organisation }: OrganisationProps) => {
  return <Page title={<EuiFlexGroup justifyContent='spaceBetween'>
    <EuiFlexItem>{organisation.fullName}</EuiFlexItem>
    <EuiFlexGroup alignItems='center'>
      <EuiFlexItem>
        <EditOrganisationButton organisation={organisation} />
      </EuiFlexItem>
      <EuiFlexItem>
        <DeleteButton organisationId={organisation.organisationId} />
      </EuiFlexItem>
    </EuiFlexGroup>
  </EuiFlexGroup>
  }>
    <ViewOrganisation organisation={organisation} />
  </Page>
}

export default withLoadOrganisationFromUrl(Organisation)