import { EuiPage, EuiPageBody, EuiPageContent, EuiPageContentBody, EuiPageHeader, EuiPageHeaderSection, EuiTitle } from '@elastic/eui'
import React from 'react'

type PageProps = {
  title?: React.ReactNode,
  width?: number
  children?: React.ReactNode
}

export const Page = ({ title, children, width }: PageProps) => (
  <EuiPage restrictWidth={width || true}>
    <EuiPageBody>
      <EuiPageHeader>
        <EuiPageHeaderSection style={{ width: '100%' }}>
          <EuiTitle size='l'>
            <h1>{title}</h1>
          </EuiTitle>
        </EuiPageHeaderSection>
      </EuiPageHeader>

      <EuiPageContent>
        <EuiPageContentBody>
          {children}
        </EuiPageContentBody>
      </EuiPageContent>
    </EuiPageBody>
  </EuiPage>
)