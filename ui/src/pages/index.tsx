import React, { FunctionComponent } from 'react'
import {
  EuiButton,
  EuiPage,
  EuiPageBody,
  EuiPageHeader,
  EuiPageHeaderSection,
} from '@elastic/eui'

const Index: FunctionComponent = () => (
  <EuiPage restrictWidth>
    <EuiPageBody>
      <EuiPageHeader>
        <EuiPageHeaderSection>
        </EuiPageHeaderSection>
        <EuiPageHeaderSection>
          <EuiButton
            iconType='/images/airzoom.svg'
            href='https://github.com/protw/azreal'>
            Open in Github
          </EuiButton>
        </EuiPageHeaderSection>
      </EuiPageHeader>
    </EuiPageBody>
  </EuiPage>
)

export default Index
