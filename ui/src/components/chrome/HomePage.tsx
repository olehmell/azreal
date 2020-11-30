import React from 'react'

import {
  EuiCard,
  EuiIcon,
  EuiFlexGroup,
  EuiFlexItem,
  EuiPage,
  EuiImage,
  EuiSpacer,
} from '@elastic/eui'
import { useRouter } from 'next/router'
import { Page } from '../utils/Page'

export const HomePage = () => {
  const router = useRouter()

  return <EuiPage restrictWidth style={{ marginTop: '2rem' }}>
    <EuiFlexGroup direction="column" justifyContent="spaceAround">
      <EuiFlexItem grow={false}>
        <EuiImage
          size="l"
          hasShadow
          alt="airzoom logo"
          url="/images/airzoom.svg"
        />
      </EuiFlexItem>
    </EuiFlexGroup>
    <EuiSpacer size='xl' />
    <EuiFlexGroup direction="column" >
      <EuiFlexItem>
        <EuiCard
          icon={<EuiIcon size="xxl" type={'watchesApp'} />}
          title='Список датчиків'
          description="Карта та таблиця встановлених датчиків"
          onClick={() => router.push('/sensors')}
        />
      </EuiFlexItem>
      <EuiFlexItem>
        <EuiCard
          icon={<EuiIcon size="xxl" type={'visualizeApp'} />}
          title='Вимірювання'
          description="Отримайте дані за датчиком у певному проміжку часу"
          onClick={() => router.push('/measurement')}
        />
      </EuiFlexItem>
      <EuiFlexItem>
        <EuiCard
          icon={<EuiIcon size="xxl" type={'logsApp'} />}
          title='Журнал обслуговування'
          description="Коли? Де? Хто?"
          onClick={() => router.push('/service/timeline')}
        />
      </EuiFlexItem>
    </EuiFlexGroup>
  </EuiPage>
}