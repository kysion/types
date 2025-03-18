import { ValueOf } from "../base";

// 用户状态类型
export type UserStatusType = {
  state: UserStatusSet,
  i18nLabel: string,
  color: UserStatusColor
};

// 用户状态集合
export const userStatusSet = {
  Unactivated: 0,
  Normal: 1,
  Banned: -1,
  Abnormal: -2,
  LoggedOut: -3
} as const;

export type UserStatusSet = ValueOf<typeof userStatusSet>;

// 用户状态颜色类型
type UserStatusColor = 'gray' | 'green' | 'red' | 'orange' | 'purple';

// 用户状态数组
export const UserStatusTypeArr: readonly UserStatusType[] = [
  { state: userStatusSet.Unactivated, i18nLabel: 'kysion.common.enum.state.Unactivated', color: 'gray' },
  { state: userStatusSet.Normal, i18nLabel: 'kysion.common.enum.state.Normal', color: 'green' },
  { state: userStatusSet.Banned, i18nLabel: 'kysion.common.enum.state.Banned', color: 'red' },
  { state: userStatusSet.Abnormal, i18nLabel: 'kysion.common.enum.state.Abnormal', color: 'orange' },
  { state: userStatusSet.LoggedOut, i18nLabel: 'kysion.common.enum.state.LoggedOut', color: 'purple' }
];

// 用户状态映射
export const UserStatusMap = new Map<UserStatusSet, UserStatusType>(UserStatusTypeArr.map(item => [item.state, item]));

export const i18nUserState = {
  zh_CN: {
    'kysion.common.enum.state.Unactivated': '未激活',
    'kysion.common.enum.state.Normal': '正常',
    'kysion.common.enum.state.Banned': '封号',
    'kysion.common.enum.state.Abnormal': '异常',
    'kysion.common.enum.state.LoggedOut': '已注销'
  },
  en_US: {
    'kysion.common.enum.state.Unactivated': 'Unactivated',
    'kysion.common.enum.state.Normal': 'Normal',
    'kysion.common.enum.state.Banned': 'Banned',
    'kysion.common.enum.state.Abnormal': 'Abnormal',
    'kysion.common.enum.state.LoggedOut': 'Logged Out'
  }
};
