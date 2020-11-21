import React, { Fragment, useState } from 'react'
import {
  EuiInMemoryTable,
  EuiLink,
  EuiHealth,
  EuiSpacer,
  EuiSwitch,
  EuiFlexGroup,
  EuiFlexItem,
  EuiCallOut,
  EuiCode,
  EuiBasicTableColumn,
} from '@elastic/eui'

type TableProps<T> = {
  data: T[]
  columns: EuiBasicTableColumn<T>[]
}

export const Table = ({ data, columns }: TableProps<Record<string, any>>) => {

  const search = {
    box: {
      schema: true,
    },
    // filters:
    // [
    //       {
    //         type: 'is',
    //         field: 'online',
    //         name: 'Online',
    //         negatedName: 'Offline',
    //       },
    //       {
    //         type: 'field_value_selection',
    //         field: 'nationality',
    //         name: 'Nationality',
    //         multiSelect: false,
    //         options: store.countries.map((country) => ({
    //           value: country.code,
    //           name: country.name,
    //           view: `${country.flag} ${country.name}`,
    //         })),
    //       },
    //     ],
  }

  return (
    <Fragment>
      <EuiInMemoryTable
        items={data}
        columns={columns}
        search={search}
        pagination={true}
        sorting={true}
      />
    </Fragment>
  )
}