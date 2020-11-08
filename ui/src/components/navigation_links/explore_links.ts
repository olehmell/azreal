import { EuiNavDrawerGroupProps } from '@elastic/eui';

export const buildExploreLinks = (
  makeAction: (path: string) => () => void
): EuiNavDrawerGroupProps['listItems'] => [
  {
    label: 'Користувачі та організації',
    onClick: makeAction('/users'),
    iconType: 'discoverApp',
  },
  {
    label: 'Візуалізація',
    onClick: makeAction('/measurement'),
    iconType: 'visualizeApp',
  },
  {
    label: 'Локації',
    onClick: makeAction('/locations'),
    iconType: 'gisApp',
  },
  {
    label: 'Вимірювальні фактори',
    onClick: makeAction('/factors'),
    iconType: 'metricsApp',
  },
  {
    label: 'Документи',
    onClick: makeAction('/documents'),
    iconType: 'dashboardApp',
  },
  {
    label: 'Журнал',
    onClick: makeAction('/logs'),
    iconType: 'logsApp',
  },
];
