import { ValueOf } from "../base";

export type EmployeeStateType = {
  value: EmployeeStateSet,
  i18nLabel: string,
  color: EmployeeStateColor
}

export const employeeStateSet = {
  HaveResigned: -1,
  UnActivated: 0,
  Staffed: 1
} as const;

export type EmployeeStateSet = ValueOf<typeof employeeStateSet>;

type EmployeeStateColor = 'gray' | 'orange' | 'green';

export const EmployeeStateArr: readonly EmployeeStateType[] = [
  { value: employeeStateSet.HaveResigned, i18nLabel: 'kysion.employee.column.state.leave', color: 'gray' },
  { value: employeeStateSet.UnActivated, i18nLabel: 'kysion.employee.column.state.UnActivated', color: 'orange' },
  { value: employeeStateSet.Staffed, i18nLabel: 'kysion.employee.column.state.onTheJob', color: 'green' }
];

export const EmployeeStateMap = new Map<EmployeeStateSet, EmployeeStateType>(EmployeeStateArr.map(item => [item.value, item]));

export const i18nEmployeeState = {
  zh_CN: {
    'kysion.employee.column.state.leave': '离职',
    'kysion.employee.column.state.UnActivated': '未激活',
    'kysion.employee.column.state.onTheJob': '在职'
  },
  en_US: {
    'kysion.employee.column.state.leave': 'Resigned',
    'kysion.employee.column.state.UnActivated': 'UnActivated',
    'kysion.employee.column.state.onTheJob': 'Staffed'
  }
}
