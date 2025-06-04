import { ValueOf } from "../common";

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

export const YesNoStatei18n = {
    zh_CN: {
        'kysion.common.enum.Yes': '是',
        'kysion.common.enum.No': '否'
    },
    en_US: {
        'kysion.common.enum.Yes': 'Yes',
        'kysion.common.enum.No': 'No'
    }
}
