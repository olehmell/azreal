import { EuiDataGrid, EuiDataGridColumn, EuiLink, EuiLoadingChart, EuiPage, EuiPageBody, EuiPageContent, EuiPageContentBody, EuiPageHeader, EuiPageHeaderSection, EuiTitle } from '@elastic/eui';
import React, { Fragment, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { useGetFactors } from 'src/graphql/query/factors/getFactorsWithSensors';
import { Loading } from '../utils/loading';
import { Page } from '../utils/Page';

type Column = {
  label: string,
  unit: string,
  maxValues: number,
  amount: number
}

const DEFAULT_PAGINATION_SIZE = 20
const columns: EuiDataGridColumn[] = [{
    id: 'label',
    display: 'Назва фактору',
  },
  {
    id: 'unit',
    display: 'Одиниці',
  },
  {
    id: 'maxValues',
    display: 'Максимальні значення',
  },
  {
    id: 'amount',
    display: 'Кількість датчиків',
  }
];

const Factors = () => {
  const { data, loading, error } = useGetFactors()

  const sensorsData: Column[] = data?.az_sensors_PollutionFactors_aggregate.nodes
    .map(({ label, maxValues, unit, SensorFactors }) => ({
      label,
      unit,
      maxValues,
      amount: SensorFactors.length
    }))

  console.log('sensorsData', sensorsData, columns)

  if (error) return null;

  if (loading) return <Loading />

  return <ViewFactors data={sensorsData} />
}

type ViewFactorsProps = {
  data: Column[]
}

export const ViewFactors = ({ data }: ViewFactorsProps) => {
  
    // ** Pagination config
    const [pagination, setPagination] = useState({ pageIndex: 0, pageSize: data.length < DEFAULT_PAGINATION_SIZE ? data.length : DEFAULT_PAGINATION_SIZE});
    const onChangeItemsPerPage = useCallback(
      (pageSize) =>
        setPagination((pagination) => ({
          ...pagination,
          pageSize,
          pageIndex: 0,
        })),
      [setPagination]
    );
    const onChangePage = useCallback(
      (pageIndex) =>
        setPagination((pagination) => ({ ...pagination, pageIndex })),
      [setPagination]
    );
  
    // ** Sorting config
    const [sortingColumns, setSortingColumns] = useState([]);
    const onSort = useCallback(
      (sortingColumns) => {
        setSortingColumns(sortingColumns);
      },
      [setSortingColumns]
    );
  
    // Column visibility
    const [visibleColumns, setVisibleColumns] = useState(() =>
      columns.map(({ id }) => id)
    ); // initialize to the full set of columns
  
    const renderCellValue = useMemo(() => {
      return ({ rowIndex, columnId }) => {
        console.log('columnId', columnId, data[rowIndex])
        return data.hasOwnProperty(rowIndex)
          ? data[rowIndex][columnId]
          : null;
      };
    }, []);
  
    return (
      <Page
        title='Вимірювальні фактори'
      >
        <EuiDataGrid
          aria-label="Data grid demo"
          columns={columns}
          columnVisibility={{ visibleColumns, setVisibleColumns }}
          rowCount={data.length}
          renderCellValue={renderCellValue}
          inMemory={{ level: 'sorting' }}
          sorting={{ columns: sortingColumns, onSort }}
          pagination={{
            ...pagination,
            pageSizeOptions: [20, 50, 100],
            onChangeItemsPerPage: onChangeItemsPerPage,
            onChangePage: onChangePage,
          }}
          onColumnResize={(eventData) => {
            console.log(eventData);
          }}
        />
      </Page>
    );
  };
export default Factors