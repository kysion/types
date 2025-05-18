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

// 用户类型类型
export type UserType = {
  value: UserTypeSet,
  i18nLabel: string,
  color: UserTypeColor
};

// 用户类型集合
export const userTypeSet = {
  Anonymous: 0,
  User: 1,
  UserLeader: 2,
  Merchant: 4,
  Member: 8,
  Agent: 512,
  SubCompany: 1024,
  HeadCompany: 2048
} as const;

export type UserTypeSet = ValueOf<typeof userTypeSet>;

// 用户类型颜色类型
type UserTypeColor = 'default' | 'blue' | 'green' | 'gold' | 'purple' | 'red' | 'orange' | 'cyan';

// 用户类型数组
export const UserTypeArr: readonly UserType[] = [
  { value: userTypeSet.Anonymous, i18nLabel: 'kysion.common.enum.userType.Anonymous', color: 'default' },
  { value: userTypeSet.User, i18nLabel: 'kysion.common.enum.userType.User', color: 'blue' },
  { value: userTypeSet.UserLeader, i18nLabel: 'kysion.common.enum.userType.UserLeader', color: 'green' },
  { value: userTypeSet.Merchant, i18nLabel: 'kysion.common.enum.userType.Merchant', color: 'gold' },
  { value: userTypeSet.Member, i18nLabel: 'kysion.common.enum.userType.Member', color: 'purple' },
  { value: userTypeSet.Agent, i18nLabel: 'kysion.common.enum.userType.Agent', color: 'red' },
  { value: userTypeSet.SubCompany, i18nLabel: 'kysion.common.enum.userType.SubCompany', color: 'orange' },
  { value: userTypeSet.HeadCompany, i18nLabel: 'kysion.common.enum.userType.HeadCompany', color: 'cyan' }
];

// 用户类型映射
export const UserTypeMap = new Map<UserTypeSet, UserType>(UserTypeArr.map(item => [item.value, item]));
