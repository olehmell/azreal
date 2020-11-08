import { EuiPage, EuiPageBody, EuiPageHeader, EuiPageHeaderSection, EuiTitle, EuiPageContent, EuiPageContentBody } from "@elastic/eui"
import React from "react"
import { Page } from "../utils/Page"
import NewLocation from "./NewSensor"

export const Location = () => {
  return <Page
    title='Новий датчик'
  >
    <NewLocation />
  </Page>
}

export default Location