import React from 'react'
import 'react-modern-calendar-datepicker/lib/DatePicker.css'
import DatePicker, { Day, DayRange, utils } from 'react-modern-calendar-datepicker'
import moment from 'moment'
import styles from './picker.module.sass'

const myCustomLocale = {
  // months list by order
  months: [
    'Січень',
    'Лютий',
    'Березень',
    'Квітень',
    'Травень',
    'Червень',
    'Липень',
    'Серпень',
    'Вересень',
    'Жовтень',
    'Листопад',
    'Грудень',
  ],

  // week days by order
  weekDays: [
    {
      name: 'Неділя', // used for accessibility 
      short: 'Нд', // displayed at the top of days' rows
      isWeekend: true, // is it a formal weekend or not?
    },
    {
      name: 'Понеділок',
      short: 'Пн',
    },
    {
      name: 'Вівторок',
      short: 'Вт',
    },
    {
      name: 'Середа',
      short: 'Ср',
    },
    {
      name: 'Четвер',
      short: 'Чт',
    },
    {
      name: 'П\'ятниця',
      short: 'Пт',
    },
    {
      name: 'Субота',
      short: 'Сб',
      isWeekend: true,
    },
  ],

  // just play around with this number between 0 and 6
  weekStartingIndex: 0,

  // return a { year: number, month: number, day: number } object
  getToday (gregorainTodayObject) {
    return gregorainTodayObject
  },

  // return a native JavaScript date here
  toNativeDate (date) {
    return new Date(date.year, date.month - 1, date.day)
  },

  // return a number for date's month length
  getMonthLength (date) {
    return new Date(date.year, date.month, 0).getDate()
  },

  // return a transformed digit to your locale
  transformDigit (digit) {
    return digit
  },

  // texts in the date picker
  nextMonth: 'Наступний місяць',
  previousMonth: 'Попередній місяць',
  openMonthSelector: 'Вибрати місяць',
  openYearSelector: 'Вибрати рік',
  closeMonthSelector: 'Закрити',
  closeYearSelector: 'Закрити',
  defaultPlaceholder: 'Оберіть проміжок часу...',

  // for input range value
  from: 'З',
  to: 'по',


  // used for input value when multi dates are selected
  digitSeparator: ',',

  // if your provide -2 for example, year will be 2 digited
  yearLetterSkip: 0,

  // is your language rtl or ltr?
  isRtl: false,
}


type DateRangeStr = {
  from: string,
  to: string
}

type DataPickerProps = {
  value: DayRange
  onChange: ({ from, to }: DayRange) => void
}

export const getDateString = ({ year, month, day }: Day) =>
  moment(`${year}/${month}/${day}`).toISOString()

export const getDateRangeString = ({ from, to }: DayRange): DateRangeStr => {
  return {
    from: getDateString(from),
    to: getDateString(to)
  }
}

export const DataPicker = ({ onChange, value }: DataPickerProps) => <DatePicker
  value={value || { from: null, to: null }}
  onChange={onChange}
  colorPrimary={'#006bb4'}
  colorPrimaryLight={'#d2e4f2'}
  maximumDate={utils('en').getToday()}
  shouldHighlightWeekends
  inputClassName={styles.DataPicker}
  locale={myCustomLocale}
/>


export default DataPicker