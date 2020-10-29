import React, { FunctionComponent } from 'react';
import {
  EuiButton,
  EuiPage,
  EuiPageBody,
  EuiPageHeader,
  EuiPageHeaderSection,
  EuiTitle,
} from '@elastic/eui';

const Index: FunctionComponent = () => (
  <EuiPage restrictWidth>
    <EuiPageBody>
      <EuiPageHeader>
        <EuiPageHeaderSection>
          <EuiTitle size='l'>
            <h1>Airzoom UI</h1>
          </EuiTitle>
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
);

export default Index;
