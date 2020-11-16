import { EuiDataGrid, EuiDataGridColumn, EuiLink, EuiLoadingChart, EuiPage, EuiPageBody, EuiPageContent, EuiPageContentBody, EuiPageHeader, EuiPageHeaderSection, EuiTitle } from '@elastic/eui';
import React, { Fragment, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { useGetFactors } from 'src/graphql/query/factors/getFactorsWithSensors';
import { DataGrid } from '../utils/DataGrid';
import { Loading } from '../utils/loading';
import { Page } from '../utils/Page';

type Column = {
  label: string,
  unit: string,
  amount: number
}

const Factors = () => {
  const { data, loading, error } = useGetFactors()

  const columns: EuiDataGridColumn[] = [ {
    id: 'label',
    display: 'Назва фактору',
  },
  {
    id: 'unit',
    display: 'Одиниці',
  },
  {
    id: 'amount',
    display: 'Кількість датчиків',
  }
  ];

  const sensorsData: Column[] = data?.az_sensors_PollutionFactors_aggregate.nodes
    .map(({ label, unit, SensorFactors }) => ({
      label,
      unit,
      amount: SensorFactors.length
    }))

  if (error) return null;

  if (loading) return <Loading />

  return <Page title='Вимірювальні фактори'>
    <DataGrid data={sensorsData} columns={columns} />
  </Page>
}

export default Factors