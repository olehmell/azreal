import { EuiNavDrawerGroupProps } from '@elastic/eui'

export const buildExploreLinks = (
  makeAction: (path: string) => () => void
): EuiNavDrawerGroupProps['listItems'] => [
  {
    label: 'Користувачі та організації',
    iconType: 'users',
    flyoutMenu: {
      title: 'Користувачі та організації',
      listItems: [
        {
          label: 'Організації',
          onClick: makeAction('/organisations'),
          iconType: 'graphApp'
        },
        {
          label: 'Користувачі',
          onClick: makeAction('/users'),
          iconType: 'usersRolesApp'
        },
        {
          label: 'Додати користувача',
          onClick: makeAction('/users/new'),
          iconType: 'createSingleMetricJob'
        },
        {
          label: 'Створити організацію',
          onClick: makeAction('/organisations/new'),
          iconType: 'packetbeatApp'
        }
      ],
    },
  },
  {
    label: 'Датчики',
    onClick: makeAction('/sensors'),
    iconType: 'watchesApp',
    flyoutMenu: {
      title: 'Датчики',
      listItems: [
        {
          label: 'Усі датчики',
          onClick: makeAction('/sensors'),
          iconType: 'outlierDetectionJob'
        },
        {
          label: 'Додатий датчик',
          onClick: makeAction('/sensors/new'),
          iconType: 'createAdvancedJob'
        }
      ],
    },
  },
  {
    label: 'Візуалізація',
    onClick: makeAction('/measurement'),
    iconType: 'visualizeApp',
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
]
