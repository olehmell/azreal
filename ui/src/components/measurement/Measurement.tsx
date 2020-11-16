import { EuiComboBox, EuiDataGridColumn, EuiFormRow, EuiSpacer, EuiDatePicker} from "@elastic/eui"
import React, { useState } from "react"
import { useGetMeasurementLastDay } from "src/graphql/query/measurement/getMeasurement"
import { GetMeasuremetLastDay_az_measurements_Measurements_aggregate_nodes as Measurements } from "src/graphql/query/measurement/types/GetMeasuremetLastDay"
import { DataGrid } from "../utils/DataGrid"
import { Loading } from "../utils/loading"
import { Page } from "../utils/Page"
import { ChartByParam } from "./ChartByParams"
import moment from 'moment';
import { date } from "faker"
import { debug } from "console"
import { dateValue } from "@elastic/eui/src/components/search_bar/query/date_value"



type MeasurementTProps = {
  measurements: Measurements[]
}

const MeasurementTable = ({ measurements }: MeasurementTProps) => {

  const dynamicColumnIds = new Set()

  const measurementData = measurements.map(({ locationId, sensorId, timestamp, values }) => {

    const measurementValue = {}

    values.forEach(({ name, value }) => {
      measurementValue[name] = value

      dynamicColumnIds.add(name)
    })

    return {
      locationId,
      sensorId,
      timestamp,
      ...measurementValue
    }
  })

  const dynamicColumn = []
  dynamicColumnIds.forEach(id => dynamicColumn.push({ id }))

  const columns: EuiDataGridColumn[] = [
    {
      id: 'timestamp',
      display: 'Дата'
    },
    {
      id: 'locationId',
      display: 'ID локації'
    },
    {
      id: 'sensorId',
      display: 'ID сенсора'
    }, 
    ...dynamicColumn
  ]

  return <DataGrid data={measurementData} columns={columns} />
}

export const MeasurementData = () => {
  const { data, error, loading } = useGetMeasurementLastDay()

  if (error) return null

  if (loading) return <Loading />

  const measurements = data.az_measurements_Measurements_aggregate.nodes

  return <>
    <MeasurementTable measurements={measurements} />
    <EuiSpacer size='xxl' />
    <ChartByParam />
  </>
}

const measurementSelectorOptions = [
  {
    label: 'День',
  },
  {
    label: 'Тиждень',
  },
  {
    label: 'Місяць',
  },
  {
    label: 'Рік',
  },
  {
    label: 'Усі дані',
  }
];


const MeasurementSelector = () => {

  const [ selectedOptions, setSelected ] = useState<any[]>();

  const onChange = (selectedOptions) => {
    // We should only get back either 0 or 1 options.
    setSelected(selectedOptions);
  };

  return (<>
    <EuiFormRow
      label='Оберіть розмір вибірки'
      style={{ maxWidth: 200 }}
      helpText="Розмір вибірки">
      <EuiComboBox
        placeholder="Виберіть розмір вибірки"
        singleSelection={{ asPlainText: true }}
        options={measurementSelectorOptions}
        selectedOptions={selectedOptions}
        onChange={onChange}
      />
    </EuiFormRow>
    <EuiSpacer size='xxl' />
    {selectedOptions && <MeasurementData />}
  </>
  );
}

const FromDate = () => {
  const [ startDate, setStartDate ] = useState(moment());
  const handleChange = (date) => {
    setStartDate(date);
    const date_for_Oleh = JSON.stringify(date);
    console.log(date_for_Oleh.slice(0, 11));
    console.log(typeof date_for_Oleh)
  };
  return ( <>
    <EuiFormRow label="Select a start date">
      <EuiDatePicker selected={startDate} onChange={handleChange} />
    </EuiFormRow>
  </>
  );
}

const ToDate = () => {
  const [ startDate, setStartDate ] = useState(moment());
  const handleChange = (date) => {
    setStartDate(date);
    const date_for_Oleh = JSON.stringify(date);
    console.log(date_for_Oleh.slice(0, 11));
  };
  return ( <>
    <EuiFormRow label="Select a end date">
      <EuiDatePicker selected={startDate} onChange={handleChange} />
    </EuiFormRow>
  </>
  );
}

export default () => {
  return <Page>
    <MeasurementSelector />
    <FromDate />
    <ToDate />
  </Page>
}
