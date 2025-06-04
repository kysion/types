import { ValueOf } from "../common";

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

export const EnabledStatei18n = {
    zh_CN: {
        'kysion.common.enum.Enabled': '启用',
        'kysion.common.enum.Disabled': '禁用',
    },
    en_US: {
        'kysion.common.enum.Enabled': 'Enabled',
        'kysion.common.enum.Disabled': 'Disabled',
    }
}