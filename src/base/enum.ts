export type ValueOf<T, K extends keyof T = keyof T> = T[K];

// 性别枚举包装
export type SexType = {
  value: SexSet,
  i18nLabel: string,
  icon: SexIcon,
  color: SexColor
};

export const sexSet = {
  Unknown: 0,
  Male: 1,
  Female: 2
} as const;

export type SexSet = ValueOf<typeof sexSet>;

type SexIcon = 'mdi:gender-male' | 'mdi:gender-female' | 'mdi:gender-male-female';
type SexColor = 'blue' | 'red' | 'green';

export const SexTypeArr: readonly SexType[] = [
  { value: sexSet.Unknown, i18nLabel: 'kysion.common.enum.Unknown', icon: 'mdi:gender-male-female', color: 'green' },
  { value: sexSet.Male, i18nLabel: 'kysion.common.enum.Male', icon: 'mdi:gender-male', color: 'blue' },
  { value: sexSet.Female, i18nLabel: 'kysion.common.enum.Female', icon: 'mdi:gender-female', color: 'red' }
];

export const SexMap = new Map<SexSet, SexType>(SexTypeArr.map(item => [item.value, item]));

/**
 * ****************************************************
 */

// 是否启用状态类型
export type EnabledStateSetType = {
  value: EnabledStateSet,
  i18nLabel: string,
  color: EnabledStatusColor
};

// 是否启用状态集合
export const enabledStateSet = {
  Enabled: 1,
  Disabled: 0
} as const;

export type EnabledStateSet = ValueOf<typeof enabledStateSet>;

// 是否启用状态颜色类型
type EnabledStatusColor = 'green' | 'gray';

// 是否启用状态数组
export const EnabledStateTypeArr: readonly EnabledStateSetType[] = [
  { value: enabledStateSet.Enabled, i18nLabel: 'kysion.common.enum.Enabled', color: 'green' },
  { value: enabledStateSet.Disabled, i18nLabel: 'kysion.common.enum.Disabled', color: 'gray' }
];

// 是否启用状态映射
export const EnabledStateMap = new Map<EnabledStateSet, EnabledStateSetType>(EnabledStateTypeArr.map(item => [item.value, item]));

/**
 * ********************************************************
 */
// 是否启用状态类型
export type YesNoStateSetType = {
  state: YesNoStateSet,
  i18nLabel: string,
  color: YesNoStatusColor
};

// 是否启用状态集合
export const yesNoStateSet = {
  Yes: 1,
  No: 0
} as const;

export type YesNoStateSet = ValueOf<typeof yesNoStateSet>;

// 是否启用状态颜色类型
type YesNoStatusColor = 'cyan' | 'blue';

// 是否启用状态数组
export const YesNoStateTypeArr: readonly YesNoStateSetType[] = [
  { state: yesNoStateSet.Yes, i18nLabel: 'kysion.common.enum.Yes', color: 'cyan' },
  { state: yesNoStateSet.No, i18nLabel: 'kysion.common.enum.No', color: 'blue' }
];

// 是否启用状态映射
export const YesNoStateMap = new Map<YesNoStateSet, YesNoStateSetType>(YesNoStateTypeArr.map(item => [item.state, item]));

/**
 * ********************************************************
 */

export const i18n = {
  zh_CN: {
    'kysion.common.enum.Unknown': '未知',
    'kysion.common.enum.Male': '男',
    'kysion.common.enum.Female': '女',
    'kysion.common.enum.Enabled': '启用',
    'kysion.common.enum.Disabled': '禁用',
    'kysion.common.enum.Yes': '是',
    'kysion.common.enum.No': '否'
  },
  en_US: {
    'kysion.common.enum.Unknown': 'Unknown',
    'kysion.common.enum.Male': 'Male',
    'kysion.common.enum.Female': 'Female',
    'kysion.common.enum.Enabled': 'Enabled',
    'kysion.common.enum.Disabled': 'Disabled',
    'kysion.common.enum.Yes': 'Yes',
    'kysion.common.enum.No': 'No'
  }
}
