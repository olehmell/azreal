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
    onClick: makeAction('/visualize'),
    iconType: 'visualizeApp',
  },
  {
    label: 'Документи',
    onClick: makeAction('/documents'),
    iconType: 'dashboardApp',
  },
  {
    label: 'Карта',
    onClick: makeAction('/maps'),
    iconType: 'gisApp',
  },
  {
    label: 'Датчики',
    onClick: makeAction('/sensors'),
    iconType: 'metricsApp',
  },
  {
    label: 'Журнал',
    onClick: makeAction('/logs'),
    iconType: 'logsApp',
  },
];
