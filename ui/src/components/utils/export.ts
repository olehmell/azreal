import { ExportToCsv } from 'export-to-csv'
 
const options = { 
  fieldSeparator: ',',
  quoteStrings: '"',
  decimalSeparator: '.',
  showLabels: true, 
  showTitle: true,
  title: 'Airzoom-CSV',
  useTextFile: false,
  useBom: true,
  useKeysAsHeaders: true,
}
 
export const exportToCsv = (name: string, data: any[]) => {
  const csvExporter = new ExportToCsv({ ...options, title: name })
  return csvExporter.generateCsv(data)
}
