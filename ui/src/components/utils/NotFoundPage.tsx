import React, { Fragment, FunctionComponent } from 'react';
import { EuiButton, EuiEmptyPrompt } from '@elastic/eui';
import Link from 'next/link';

const NotFoundPage: FunctionComponent = () => (
  <EuiEmptyPrompt
    iconType='editorStrike'
    title={<h2>Упс!</h2>}
    body={
      <Fragment>
        <p>Сторінки яку ти шукаєш не існувало, або вже не існує</p>
      </Fragment>
    }
    actions={
      <Link href='/'>
        <a>
          <EuiButton color='primary' fill>
            Повернутись на головну
          </EuiButton>
        </a>
      </Link>
    }
  />
);

export default NotFoundPage;
