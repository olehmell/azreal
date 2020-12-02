import moment from 'moment'

export const getAggregationTime = (timestamp: string) => moment(timestamp).format('lll')