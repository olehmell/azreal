import { EuiBadge, EuiDescriptionList, EuiFlexGroup, EuiFlexItem, EuiStat } from '@elastic/eui'
import Link from 'next/link'
import React from 'react'
import { MapContainer, Marker, Popup } from 'react-leaflet'
import { createDescItem } from '../utils'
import { ButtonLink } from '../utils/ButtonLink'
import { parseLatLngTuple, titleLayer } from '../utils/Map'
import { Page } from '../utils/Page'
import { DeleteButton } from './DeleteButton'
import { EditUserButton } from './EditUser'
import { OrganisationLink, UserProps, withLoadMyUser, withLoadUserFromUrl } from './utils'

const UserDesc = ({
  user
}: UserProps) => {
  const {
    fullName,
    email,
    phoneNumber,
    Organisation
  } = user

  const items = [
    createDescItem('ПІБ', fullName),
    createDescItem('Email', email),
    createDescItem('Номер телефону', phoneNumber),
    createDescItem('Організація', <OrganisationLink organisation={Organisation as any} />)
  ].filter(x => x !== undefined)

  return <EuiDescriptionList textStyle="reverse" listItems={items} />
}

export const ViewUser = ({ user }: UserProps) => {
  return <EuiFlexGroup>
    <EuiFlexItem>
      <UserDesc user={user} />
    </EuiFlexItem>
    <EuiFlexItem>
    </EuiFlexItem>
  </EuiFlexGroup>
}


export const UserPage = ({ user }: UserProps) => {
  return <Page title={<EuiFlexGroup justifyContent='spaceBetween'>
    <EuiFlexItem>{user.fullName}</EuiFlexItem>
    <EuiFlexGroup alignItems='center'>
      <EuiFlexItem>
        <EditUserButton user={user} />
      </EuiFlexItem>
      <EuiFlexItem>
        <DeleteButton userId={user.userId} />
      </EuiFlexItem>
    </EuiFlexGroup>
  </EuiFlexGroup>
  }>
    <ViewUser user={user} />
  </Page>
}

export const User = withLoadUserFromUrl(UserPage)
export const MyUser = withLoadMyUser(UserPage)